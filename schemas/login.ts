import * as yup from "yup";
import { USER_ROLE } from "../constants/role";

export const loginSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().min(6).max(15).required("Password is required"),
});

export const adminLoginSchema = yup.object().shape({
  // role:yup.mixed<USER_ROLE>().oneOf(Object.values(USER_ROLE)),
  role:yup.string().required("role is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().min(6).max(15).required("Password is required"),
});
