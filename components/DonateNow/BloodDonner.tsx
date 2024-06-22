"use client"


import DonateHeader from '../ReusableComponent/DonateHeader';
import { SubmitHandler } from 'react-hook-form';
import Form from '../ReusableComponent/Form/Form';
import FormInput from '../ReusableComponent/Form/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { beDonnerSchema } from '../../schemas/beDonner';
import { USER_ROLE } from '../../constants/role';
import FormSelectField from '../ReusableComponent/Form/FormSelectField';
import { bloodGroupOptions, divisionOptions, genderOptions } from '../../constants/global';
import { useAddDonnerMutation } from '../../redux/api/donnerApi';
import { toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';


type FormValues = {
    phoneNumber: string;
    password: string;
};
type propsType={
    heading?: boolean;
}

const BloodDonner = ({heading=true}:propsType) => {
    const [addDonner] = useAddDonnerMutation()

    // const router = useRouter()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.role = USER_ROLE.DONNER
            data.isBloodDonner = true
            const res = await addDonner({ ...data }).unwrap();
            if (res?.success) {
                toast.success(res?.message)
                // router.push("/")
            }
        }
        catch (err: any) {
            if (err.message?.startsWith("E11000 duplicate")) {
                return toast.error("Already used this phone number")
            }
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (
        <div className="">
           {heading && <DonateHeader content={"BE A BLOOD DONNER"} />}

            <div className="my-6 p-4 w-5/6 rounded-md mx-auto shadow-md border-1 border-border-color">
                <Form submitHandler={onSubmit} resolver={yupResolver(beDonnerSchema)}>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormInput
                                name="fullName"
                                type="text"
                                className=" w-full"
                                label="Full name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormInput
                                name="phoneNumber"
                                type="number"
                                className=" w-full"
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormSelectField
                                name="division"
                                className="w-full"
                                label="Select Division"
                                options={divisionOptions}
                                required
                            />
                        </div>
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormSelectField
                                name="gender"
                                className="w-full"
                                label="Select Gender"
                                options={genderOptions}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormSelectField
                                name="bloodGroup"
                                className="w-full"
                                label="Select Blood Group"
                                options={bloodGroupOptions}
                                required
                            />
                        </div>
                        <div className='mb-0 md:mb-3 w-full'>
                            <FormInput
                                name="address"
                                type="text"
                                className=" w-full"
                                label="Address"
                                placeholder="Enter your address without division"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="createUser" ><button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4"> Submit</button></label>
                   
                </Form>
            </div>
        </div>
    );
};

export default BloodDonner;