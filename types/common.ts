import { USER_ROLE } from "../constants/role";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  message: string
  statusCode: string | number;
  success: boolean
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
  success: boolean
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};





export interface IBanner {
  _id: string;

}

export interface IAdmin {
  _id: string;
  id: string;
  adminId:string;
  fullName: string;
  gender: string;
  division: string;
  phoneNumber: string;
  profileImage: any;
  role: USER_ROLE;
  bloodGroup: string;
  designation: string;
  secretKey: string;
  status: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}




export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
}
export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IAcademicFaculty {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicDepartment {
  id: string;
  title: string;
  academicFaculty: IAcademicFaculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAcademicSemester {
  id: string;
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBuilding {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}



export interface ICourse {
  id: string;
  title: string;
  code: string;
  credits: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  prerequisites?: null[] | null;
  prerequisiteFor?: null[] | null;
}

export interface IAcademicCoreSemester {
  id: string;
  syncId?: null;
  title: string;
  code: string;
  year: number;
  isCurrent?: boolean;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
}
export interface ISemesterRegistration {
  id: string;
  startDate: string;
  endDate: string;
  status: string;
  maxCredit: number;
  minCredit: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicSemesterId: string;
  academicSemester?: IAcademicCoreSemester;
}

export interface IAcademicCoreDepartment {
  id: string;
  syncId?: null;
  title: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicFacultyId: string;
}

export interface IOfferedCourse {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  courseId: string;
  semesterRegistrationId: string;
  academicDepartmentId: string;
  semesterRegistration: ISemesterRegistration;
  course: ICourse;
  academicDepartment: IAcademicCoreDepartment;
}

export interface IAcademicCoreFaculty {
  id: string;
  facultyId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicDepartmentId: string;
  academicFacultyId: string;
}





export interface ICoreFaculty {
  id: string;
  facultyId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicDepartmentId: string;
  academicFacultyId: string;
  academicFaculty: IAcademicCoreFaculty;
  academicDepartment: IAcademicCoreDepartment;
}

export interface IMyCourse {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  studentId: string;
  courseId: string;
  academicSemesterId: string;
  grade?: null;
  point: number;
  totalMarks: number;
  status: string;
  course: ICourse;
}





export interface IStudentEnrolledCourseMark {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  studentId: string;
  studentEnrolledCourseId: string;
  academicSemesterId: string;
  grade?: null;
  marks: number;
  examType: string;
  academicSemester: IAcademicCoreSemester;
  student: ICoreStudent;
  studentEnrolledCourse: IStudentEnrolledCourse;
}
export interface ICoreStudent {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  profileImage: string;
  email: string;
  contactNo: string;
  gender: string;
  bloodGroup: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  academicSemesterId: string;
  academicDepartmentId: string;
  academicFacultyId: string;
  academicFaculty: IAcademicCoreFaculty;
  academicDepartment: IAcademicCoreDepartment;
  academicSemester: IAcademicCoreSemester;
}

export interface IStudentEnrolledCourse {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  studentId: string;
  courseId: string;
  academicSemesterId: string;
  grade?: null;
  point: number;
  totalMarks: number;
  status: string;
  academicSemester: IAcademicCoreSemester;
  student: ICoreStudent;
  course: ICourse;
}
