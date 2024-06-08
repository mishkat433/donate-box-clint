import * as yup from "yup";
import { DIVISION_NAME } from "../constants/division";
import { BLOOD_GROUP_NAME } from "../constants/bloodGroup";
import { GENDER } from "../constants/gender";

export const userRegisterSchema = yup.object().shape({
    // role:yup.mixed<USER_ROLE>().oneOf(Object.values(USER_ROLE)),
    fullName: yup.string().required("Name is required").min(3).max(32),
    phoneNumber: yup.string().required("Phone number is required"),
    division: yup.mixed<DIVISION_NAME>().oneOf(Object.values(DIVISION_NAME)).required('Division name is required'),
    bloodGroup: yup.mixed<BLOOD_GROUP_NAME>().oneOf(Object.values(BLOOD_GROUP_NAME)).required('blood group is required'),
    gender: yup.mixed<GENDER>().oneOf(Object.values(GENDER)).required('Gender is required'),
    address: yup.string().required("Enter your full address without division").optional(),
    // isBloodDonner: yup.boolean(),
    password: yup.string().required("Enter your password").min(6).max(15),
    confirmPassword: yup.string().required("confirm password").min(6).max(15).oneOf([yup.ref("password")], "Passwords do not match")
});

export const alreadyUserRegisterSchema = yup.object().shape({
    // role:yup.mixed<USER_ROLE>().oneOf(Object.values(USER_ROLE)),
    phoneNumber: yup.string().required("Phone number is required"),
})


export const alreadyUserRegisterPasswordSchema = yup.object().shape({
    // role:yup.mixed<USER_ROLE>().oneOf(Object.values(USER_ROLE)),
    password: yup.string().required("Enter your password").min(6).max(15),
    confirmPassword: yup.string().required("confirm password").min(6).max(15).oneOf([yup.ref("password")], "Passwords do not match")
});

export const adminRegisterSchema=yup.object().shape({
    fullName: yup.string().required("Name is required").min(3).max(32),
    phoneNumber: yup.string().required("Phone number is required"),
    division: yup.mixed<DIVISION_NAME>().oneOf(Object.values(DIVISION_NAME)).required('Division name is required'),
    bloodGroup: yup.mixed<BLOOD_GROUP_NAME>().oneOf(Object.values(BLOOD_GROUP_NAME)).required('blood group is required'),
    gender: yup.mixed<GENDER>().oneOf(Object.values(GENDER)).required('Gender is required'),
    address: yup.string().required("Enter your full address without division"),
    password: yup.string().required("Enter your password").min(6).max(15),
    confirmPassword: yup.string().required("confirm password").min(6).max(15).oneOf([yup.ref("password")], "Passwords do not match")
})