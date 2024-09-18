import { authKey } from "../constants/storageKey";
import { instance as axiosInstance } from "../helpers/axios/axiosInstance";
import { getBaseUrl } from "../helpers/config/envConfig";
import { decodedToken } from "../utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "../utils/local-storage";


export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};


export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};


interface UserInfo {
  userId?: string;
  adminId?: string;
}


export const getUserId = (userInfo: UserInfo): string => {
  return userInfo.userId ?? userInfo.adminId ?? '';
};


export const formatTime = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute < 10 ? '0' + minute : minute} ${period}`;

}


