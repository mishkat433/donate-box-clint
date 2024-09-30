import * as yup from "yup";
import { GENDER } from "../constants/gender";
import { BLOOD_GROUP_NAME } from "../constants/bloodGroup";


export const beDonnerSchema = yup.object().shape({
    // role:yup.mixed<USER_ROLE>().oneOf(Object.values(USER_ROLE)),
    fullName: yup.string().required("Name is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    division: yup.string().required("division is required"),
    district: yup.string().required("district is required"),
    area: yup.string().required("area is required"),
    // bloodGroup: yup.string().required("Blood group is required"),
    bloodGroup: yup.mixed<BLOOD_GROUP_NAME>().oneOf(Object.values(BLOOD_GROUP_NAME)).required('blood group is required'),
    gender: yup.mixed<GENDER>().oneOf(Object.values(GENDER)).required('Gender is required'),
    address: yup.string().required("Enter your full address"),

});


export const fundDonnerSchema = yup.object().shape({
    userId: yup.string().optional(),
    name: yup.string().required("Name is required"),
    emailOrPhone: yup.string().required("Email or phone is required"),
    donateAmount: yup.number().required("Amount is required").min(10, "Donation amount must be at least 10"),
    // donateInfo: yup.string().optional(),
    // publicShow: yup.boolean().required("required")
})