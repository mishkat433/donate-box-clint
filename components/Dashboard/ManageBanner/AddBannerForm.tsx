import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { addBannerSchema } from "../../../schemas/BannerSchema";
import Form from "../../ReusableComponent/Form/Form";
import FormInput from "../../ReusableComponent/Form/FormInput";
import FormSelectField from "../../ReusableComponent/Form/FormSelectField";
import { showingStatus } from "../../../constants/banner";
import FormTextArea from "../../ReusableComponent/Form/FormTextArea";
import toast from "react-hot-toast";
import { getUserInfo } from "../../../services/auth.service";
import { useAddBannerMutation } from "../../../redux/api/bannerApi";
import { useRef } from "react";

type FormValues = {
    showing: boolean;
    path: string;
    description: string
};

const AddBannerForm = () => {
    const userInfo: any = getUserInfo()
    const [addBanner] = useAddBannerMutation()
    const addBannerRef = useRef(null);

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.creatorId = userInfo?.adminId
            const res = await addBanner({ ...data }).unwrap();
            if (res?.success) {
                toast.success(res?.message)
                addBannerRef.current.click();
            }
        }
        catch (err: any) {
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (
        <div className="my-6 p-4  rounded-md mx-auto shadow-md border-1 border-border-color">
            <Form submitHandler={onSubmit} resolver={yupResolver(addBannerSchema)}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="showing"
                            className="w-full"
                            label="Visibility"
                            options={showingStatus}
                            required
                        />
                    </div>
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormInput
                            name="path"
                            type="text"
                            className=" w-full"
                            label="Image URL"
                            placeholder="Enter Image URL"
                            required
                        />
                    </div>
                </div>
                <div className='mb-0 md:mb-3 w-full'>
                    <FormTextArea
                        name="description"
                        label="Description"
                        placeholder="Write something"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                </div>

                {/* <label htmlFor="createBanner" ><button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4"> Submit</button></label> */}
                <div className='w-full'>
                    <button className="button-transition primary-red-button w-full py-2 px-2.5 ">Add Banner</button>
                    <label ref={addBannerRef} htmlFor="createBanner" className="w-full"></label>
                </div>
            </Form>
        </div>
    );
};

export default AddBannerForm;