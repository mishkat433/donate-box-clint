import * as yup from "yup";

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().optional(),
    phoneNumber: yup.string().required("Phone number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});
