import * as yup from "yup";

export const updatePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required("Old password is required").min(6).max(15),
    password: yup.string().required("Enter your password").min(6).max(15),
    confirmPassword: yup.string().required("confirm password").min(6).max(15).oneOf([yup.ref("password")], "Passwords do not match")
});