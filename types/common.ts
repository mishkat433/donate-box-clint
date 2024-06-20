import { JwtPayload } from "jwt-decode";
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
