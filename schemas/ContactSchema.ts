import * as yup from "yup";
import { CONTACT_STATUS } from "../constants/global";

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().optional(),
    phoneNumber: yup.string().required("Phone number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});


export const solvedContactIssueSchema = yup.object().shape({
    // status: yup.string().required("Status is required"),
    status: yup.mixed<CONTACT_STATUS>().oneOf(Object.values(CONTACT_STATUS)).required('Gender is required'),
    resolverMessage: yup.string().optional()
})