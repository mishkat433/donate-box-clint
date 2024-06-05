export const genderOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Others",
    value: "Others",
  },
];


export const roleOptions = [
  {
    label: "ADMIN",
    value: "ADMIN",
  },
  {
    label: "SUPER_ADMIN",
    value: "SUPER_ADMIN",
  },
  // {
  //   label: "USER",
  //   value: "USER",
  // },
];

export const divisionOptions = [
  {
    label: "DHAKA",
    value: "DHAKA",
  },
  {
    label: "CHATTOGRAM",
    value: "CHATTOGRAM",
  },
  {
    label: "RAJSHAHI",
    value: "RAJSHAHI",
  },
  {
    label: "KHULNA",
    value: "KHULNA",
  },
  {
    label: "BARISHALL",
    value: "BARISHALL",
  },
  {
    label: "SYLHET",
    value: "SYLHET",
  },
  {
    label: "RANGPUR",
    value: "RANGPUR",
  },
  {
    label: "MYMENSINGH",
    value: "MYMENSINGH",
  }
];


export const bloodGroupOptions = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];



export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = months.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});

export const days = [
  "SATURDAY",
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
];
export const daysOptions = days.map((day: string) => {
  return {
    label: day,
    value: day,
  };
});

export const semesterRegistrationStatus = ["UPCOMING", "ONGOING", "ENDED"];


export enum PaymentType {
  PARTIAL = "PARTIAL",
  FULL = "FULL",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  PARTIAL_PAID = "PARTIAL_PAID",
  FULL_PAID = "FULL_PAID",
}
