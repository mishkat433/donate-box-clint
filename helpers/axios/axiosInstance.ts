

import axios from "axios";
import { IGenericErrorResponse, ResponseSuccessType } from "../../types";
import { authKey } from "../../constants/storageKey";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/local-storage";
import { getNewAccessToken } from "../../services/auth.service";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      message: response?.data?.message,
      meta: response?.data?.meta,
      statusCode: response?.data?.statusCode,
      success: response?.data?.success
    };
    return responseObject;
  },
  async function (error) {
    const config = error?.config
    if (error?.response?.status === 400 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.access_token;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      return instance(config)

    }
    else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.errorMessages,
        success: error?.response?.data?.success,
      };

      return responseObject;
    }

    // return Promise.reject(error);
  }
);

export { instance };
