import axios from 'axios';
import { IGenericErrorResponse, ResponseSuccessType } from '../../types';
import { authKey } from '../../constants/storageKey';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/local-storage';
import { getNewAccessToken, removeUserInfo } from '../../services/auth.service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Create an Axios instance with default settings
const instance = axios.create({
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
    'Accept': 'application/json',
  },
  timeout: 60000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config;
  },
  function (error) {

    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data,
      meta: response?.data?.meta,
      statusCode: response?.data?.statusCode,
      success: response?.data?.success,
      message: response?.data?.message,
    };
    return responseObject;
  },
  async function (error) {
    const originalRequest = error.config;


    if (error?.response?.status === 400 && error?.response?.data?.message === "jwt expired") {
      try {
        const response = await getNewAccessToken();
        const accessToken = response?.data?.data?.access_token;
        instance.defaults.headers.Authorization = accessToken;
        setToLocalStorage(authKey, accessToken);
        originalRequest.headers.Authorization = accessToken;
        return instance(originalRequest);

      }
      catch (tokenRefreshError) {
        const router = useRouter()
      removeUserInfo(authKey);
      toast.success("Log out successful")
      router.push("/")
        console.log(tokenRefreshError);
        return Promise.reject(tokenRefreshError);
      }
    }
    else if(error?.response?.status===403 && error?.response?.data?.message === 'Invalid refresh token'){
      // console.log("object");
      const router = useRouter()
      removeUserInfo("accessToken");
      toast.success("Log out successful")
      router.push("/")
    }
    else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.status || 500,
        message: error?.response?.data?.message || 'Something went wrong',
        errorMessages: error?.response?.data?.errorMessages,
        success: error?.response?.data?.success,
      };
      return Promise.reject(responseObject);
    }
  }
);

export { instance };
