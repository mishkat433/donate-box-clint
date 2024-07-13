

export const patientTypeOptions = [
    {
        label: "Accident",
        value: "Accident",
    },
    {
        label: "Thalassemia",
        value: "Thalassemia",
    },
    {
        label: "Pregnant",
        value: "Pregnant",
    },
    {
        label: "Operation",
        value: "Operation",
    }
]

export const bloodRequestFor = [
    {
        label: "Me",
        value: "Me",
    },
    {
        label: "Father",
        value: "Father",
    },
    {
        label: "Mother",
        value: "Mother",
    },
    {
        label: "Brother",
        value: "Brother",
    },
    {
        label: "Sister",
        value: "Sister",
    },
    {
        label: "Son",
        value: "Son",
    },
    {
        label: "Other",
        value: "Other",
    }

]


export enum BLOOD_REQUEST_FOR {
    Me = "Me",
    Father = "Father",
    Mother = "Mother",
    Brother = "Brother",
    Sister = "Sister",
    Son = "Son",
    Other = "Other",
}

export enum PATIENT_TYPE {
    Accident = "Accident",
    Thalassemia = "Thalassemia",
    Pregnant = "Pregnant",
    Operation = "Operation"
}