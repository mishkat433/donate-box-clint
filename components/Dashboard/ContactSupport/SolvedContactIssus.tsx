import { IContact } from "../../../types";
import toast from "react-hot-toast";
import { getUserId, getUserInfo } from "../../../services/auth.service";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { solvedContactIssueSchema } from "../../../schemas/ContactSchema";
import FormSelectField from "../../ReusableComponent/Form/FormSelectField";
import { contactStatusOptions } from "../../../lib/ContactHistoryOptions";
import Form from "../../ReusableComponent/Form/Form";
import { SubmitHandler } from "react-hook-form";
import FormTextArea from "../../ReusableComponent/Form/FormTextArea";
import { useUpdateContactMessageMutation } from "../../../redux/api/contactApi";


interface ContactDetailsProps {
    contactData: IContact;
}

type FormValues = {
    status: string;
    donnerId: string;
};

const SolvedContactIssus: React.FC<ContactDetailsProps> = ({ contactData }) => {


    const [updateContactMessage] = useUpdateContactMessageMutation()
    const userInfo: any = getUserInfo()

    const sendRequestButtonRef = useRef(null);

    const solvedIssue: SubmitHandler<FormValues> = async (data: any) => {
        try {
            console.log(data)
            if (data.status !== "SELECT") {
                data.resolverId = getUserId(userInfo)
                const contactSolvedData = {
                    body: data,
                    id: contactData?._id
                }
                const res = await updateContactMessage({ ...contactSolvedData }).unwrap();
                if (res?.success) {
                    toast.success(res?.message)
                    if (res?.success) {
                        sendRequestButtonRef.current.click();
                    }
                }
            }
        }
        catch (err: any) {
            toast.error(err?.message)
            console.log(err);
        }
    };

    return (
        <div className='my-3 rounded-md mx-auto shadow-md border-1 border-border-color p-2 animate-fade-right animate-once '>

            <Form submitHandler={solvedIssue} resolver={yupResolver(solvedContactIssueSchema)}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormSelectField
                            name="status"
                            className="w-full"
                            label="Select Status"
                            defaultValue={contactData?.status}
                            options={contactStatusOptions}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 ">
                    <div className='mb-0 md:mb-3 w-full'>
                        <FormTextArea
                            name="resolverMessage"
                            label="Admin Message"
                            placeholder="Write your message here"
                            className="resize-none text-sm h-20"
                        />
                    </div>
                </div>

                <div className='flex w-full gap-3'>
                    <div className='w-full'>
                        <button className="button-transition primary-red-button w-full py-2 px-2.5 ">Solved Issue</button>
                        <label ref={sendRequestButtonRef} htmlFor="solvedIssue" className="w-full"></label>
                    </div>
                </div>
            </Form >


        </div>


    );
};

export default SolvedContactIssus;