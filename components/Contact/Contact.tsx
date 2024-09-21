"user client"

import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableComponent/Form/Form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../ReusableComponent/Form/FormInput";
import FormTextArea from "../ReusableComponent/Form/FormTextArea";
import { contactSchema } from "../../schemas/ContactSchema";
import { RiSendPlaneFill } from "react-icons/ri";
import { useAddMessageMutation } from "../../redux/api/contactApi";


type FormValues = {
    name: string;
    email: string;
    phoneNumber: string
    subject: string
    message: string
};

const Contact = () => {

    const [addMessage] = useAddMessageMutation()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await addMessage({ ...data }).unwrap();
            if (res?.success) {
                toast.success(res?.message)
            }
        }
        catch (err: any) {
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (

        <div className="p-4 mx-auto max-w-xl bg-white shadow-lg rounded-md ">
            <Form submitHandler={onSubmit} resolver={yupResolver(contactSchema)}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-2 w-full'>
                        <FormInput
                            name="name"
                            type="text"
                            className="w-full text-sm"
                            label="Name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-2 w-full'>
                        <FormInput
                            name="email"
                            type="email"
                            className="w-full text-sm"
                            label="Email"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-2 w-full'>
                        <FormInput
                            name="phoneNumber"
                            type="number"
                            className="w-full text-sm"
                            label="Phone Number"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-2 w-full'>
                        <FormInput
                            name="subject"
                            type="text"
                            className="w-full text-sm"
                            label="Subject"
                            placeholder="Enter a subject"
                            required
                        />
                    </div>
                </div>
                <div className='mb-0 md:mb-2 w-full'>
                    <FormTextArea
                        name="message"
                        label="Message"
                        placeholder="Write your message here"
                        className="resize-none text-sm h-20"
                        required
                    />
                </div>
                <button className="button-transition primary-red-button py-2 px-2.5 w-full mt-4 flex justify-center items-center gap-2">Submit <RiSendPlaneFill /> </button>
            </Form>
        </div>
    );
};

export default Contact;