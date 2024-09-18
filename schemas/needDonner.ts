
import * as yup from "yup";
import { BLOOD_GROUP_NAME } from "../constants/bloodGroup";
import { GENDER } from "../constants/gender";
import { BLOOD_REQUEST_FOR, PATIENT_TYPE } from "../constants/requestDonner";
import { REQUEST_HANDLER_STATUS, REQUEST_HANDLER_STATUS2 } from "../types";

export const needDonnerSchema = yup.object().shape({
    requestFor: yup.mixed<BLOOD_REQUEST_FOR>().oneOf(Object.values(BLOOD_REQUEST_FOR)).required('Which requesting for blood is required'),

    patientName: yup.string().required("Patient Name is required"),
    patientAge: yup.string().required("patient Age is required"),
    patientBG: yup.mixed<BLOOD_GROUP_NAME>().oneOf(Object.values(BLOOD_GROUP_NAME)).required('blood group is required'),
    patientGender: yup.mixed<GENDER>().oneOf(Object.values(GENDER)).required('Gender is required'),
    patientPhone: yup.string().required("Patient Name is required"),
    // patientType: yup.mixed<PATIENT_TYPE>().oneOf(Object.values(PATIENT_TYPE)).required('patient type is required'),
    patientType: yup
        .mixed<PATIENT_TYPE>()
        .oneOf(Object.values(PATIENT_TYPE))
        .required("Patient type is required")
        .test(
            "is-not-pregnant-if-male",
            "Male patients cannot be pregnant",
            function (value) {
                const { patientGender } = this.parent;
                return !(patientGender === GENDER.Male && value === PATIENT_TYPE.Pregnant);
            }
        ),

    medicalName: yup.string().required("medical name is required"),
    dateOfNeedBlood: yup.string().required("Need Blood Date is required"),
    division: yup.string().required("division is required"),
    district: yup.string().required("district is required"),
    area: yup.string().optional(),
    medicalAddress: yup.string().required("medical address is required"),


    applicantName: yup.string().when('requestFor', {
        is: (value: BLOOD_REQUEST_FOR) => value !== BLOOD_REQUEST_FOR.Me,
        then: (schema) => schema.required("Applicant name is required"),
    }),

    applicantPhone: yup.string().when('requestFor', {
        is: (value: BLOOD_REQUEST_FOR) => value !== BLOOD_REQUEST_FOR.Me,
        then: (schema) => schema.required("Applicant phone is required"),
    }),

    emergencyPhone: yup.string().optional(),
});


export const assignDonnerSchema = yup.object().shape({
    status: yup.mixed<REQUEST_HANDLER_STATUS2>().oneOf(Object.values(REQUEST_HANDLER_STATUS2)).required('status is required'),

    // adminId: yup.string().when('status', {
    //     is: (value: REQUEST_HANDLER_STATUS2) => value === REQUEST_HANDLER_STATUS2.ACCEPT,
    //     then: (schema) => schema.required("adminId is required"),
    // }),

    donnerId: yup.string().when('status', {
        is: (value: REQUEST_HANDLER_STATUS2) => value === REQUEST_HANDLER_STATUS2.ACCEPT,
        then: (schema) => schema
            .required('select a donner')
            .test('is-not-select', '"SELECT" is not accept', (value) => value !== 'SELECT'),
    }),

    rejectReason: yup.string().when('status', {
        is: (value: REQUEST_HANDLER_STATUS2) => value === REQUEST_HANDLER_STATUS2.REJECT,
        then: (schema) => schema.required("Reject reason is required"),
    }),

    // rejectReason: yup.string().required("district is required"),

})

