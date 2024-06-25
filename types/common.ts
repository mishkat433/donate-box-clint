import { JwtPayload } from "jwt-decode";
import { USER_ROLE } from "../constants/role";
import { BLOOD_GROUP_NAME } from "../constants/bloodGroup";
import { GENDER } from "../constants/gender";
import { ROUTER_TYPE } from "next/dist/build/utils";
import { DIVISION_NAME } from "../constants/division";

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

export interface IUser {
  address: string;
  bloodGroup: BLOOD_GROUP_NAME
  createdAt: string;
  division: string;
  fullName: string;
  gender: string;
  id: string;
  isBanned: boolean
  isBloodDonner: boolean
  phoneNumber: string;
  profileImage: any
  role: string;
  updatedAt: string;
  userId: string;
  verified: boolean
  __v: number;
  _id: string;
}

export interface IAdmin {
  _id: string;
  id: string;
  userId:string;
  adminId: string;
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

export interface UserInfoType {
  exp: number;
  iat: number;
  role: USER_ROLE
  userId?: string;
  adminId?: string
}


export interface IBanner {

  admin_Data: {
    address: string
    adminId: string
    bloodGroup: BLOOD_GROUP_NAME;
    division: DIVISION_NAME
    fullName: string
    phoneNumber: string
    status: string
    __v: number;
    _id: string
  };
  createdAt: string;
  creatorId: string;
  description: string;
  path: string;
  showing: boolean
  updatedAt: string;
  __v: number;
  _id: string;
}