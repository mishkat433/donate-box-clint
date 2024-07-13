import * as yup from "yup";
import { DIVISION_NAME } from "../constants/division";
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
