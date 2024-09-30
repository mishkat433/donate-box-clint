import toast from 'react-hot-toast';
import DonateHeader from '../ReusableComponent/DonateHeader';
import FormInput from '../ReusableComponent/Form/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../ReusableComponent/Form/Form';
import { fundDonnerSchema } from '../../schemas/beDonner';
import { getUserId, getUserInfo } from '../../services/auth.service';
import { useInitPaymentMutation } from '../../redux/api/fundDonnerApi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import fundDonatePic from "../../public/assets/donatePic.jpg";




type FormValues = {
    name: string;
    emailOrPhone: string;
    donateAmount: number;
};


const FundDonner = () => {
    const [initPayment] = useInitPaymentMutation()
    const userInfo: any = getUserInfo()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            data.userId = getUserId(userInfo) || null
            const res = await initPayment({ ...data }).unwrap();

            if (res?.success) {
                window.open(res?.data?.redirectGatewayURL,);
                // toast.success(res?.message)
                // router.push("/")
            }
        }
        catch (err: any) {

            // toast.error(err?.message)
            // console.log(err);
        }
    };

    return (
        <div>
            <DonateHeader content={"BE A LUCKY FUND DONNER"} />

            <div className='flex flex-col-reverse md:flex-row justify-between my-5 gap-10'>
                <div className='w-full md:w-3/5 '>
                    <Image src={fundDonatePic} height={400} width={400} alt='Donate pic' className='md:float-start p-2 w-full md:w-3/6 ' />
                    <p className='text-justify text-sm'>
                        Right now, someone is facing a moment of overwhelming hardship. A mother is wondering how she will feed her children tonight. A child is struggling to stay warm in the cold. A family is torn apart by medical bills they cannot afford. But there is hope.
                        You are that hope.
                        When you donate, you&apos;re not just giving money—you&apos;re changing lives. You&apos;re providing a child with the opportunity to go to school, helping a family put food on the table, or ensuring that someone in need has access to medical care.
                        In a world full of uncertainty, your donation is more than just a financial gift—it&apos;s a lifeline. It&apos;s a message that says, “I see you. I care about you.” With every donation, you&apos;re making a personal statement of compassion and solidarity with those who need it most.
                        When we come together as a community, our collective impact is profound. A small donation from you can:
                        <ul className='list-disc my-2 space-y-1 '>
                            <li> Feed a hungry family for days.</li>
                            <li> Provide medical care to a child who has no other option.</li>
                            <li> Give shelter to someone who has nowhere else to go.</li>
                        </ul>
                        Your kindness means someone&apos;s life will be better today—not next year, not next week, but today. You can be the reason a child smiles, a family finds hope, or someone in despair finds the strength to keep going.
                        We often think our actions are small. But to someone in crisis, your gift is everything. You have the power to turn fear into hope, doubt into belief, and despair into joy.
                        We can&apos;t do this without you.
                        Your compassion is the heart of everything we do. Whether it&apos;s $5, $50, or $500—every donation is a step toward a world where no one has to face hardship alone.
                        The future is uncertain, but with your help, it can be brighter for so many people. Be the difference. Be the reason someone believes in a better tomorrow.
                        Can we count on your kindness today?
                    </p>
                </div>

                <div className=" p-4  rounded-md mx-aut shadow-md border-1 border-border-color w-full md:w-2/5 h-full ">
                    <Form submitHandler={onSubmit} resolver={yupResolver(fundDonnerSchema)}>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6  ">
                            <div className='mb-0 md:mb-2 w-full'>
                                <FormInput
                                    name="name"
                                    type="text"
                                    className="w-full"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                            <div className='mb-0 md:mb-2 w-full'>
                                <FormInput
                                    name="emailOrPhone"
                                    type="text"
                                    className="w-full"
                                    label="Email/Phone number"
                                    placeholder="Enter your email/phone number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                            <div className='mb-0 md:mb-3 w-full'>
                                <FormInput
                                    name="donateAmount"
                                    type="number"
                                    className=" w-full"
                                    label="Amount"
                                    placeholder="Enter your donate amount"
                                    required
                                />
                            </div>
                        </div>
                        {/* <label htmlFor="createUser" ><button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4"> Submit</button></label> */}
                        <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4">Donate</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FundDonner;