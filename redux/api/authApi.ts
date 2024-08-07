import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    logOut: build.mutation({
      query: (logoutData) => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        data: logoutData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    loginUserData: build.query({
      query: (id: string | string[] | undefined) => {
          return {
              url:  `${AUTH_URL}/get-single-user/${id}`,
              method: "GET",
          };
      },
      providesTags: [tagTypes.user],
  }),

    // resetPassword: build.mutation({
    //   query: (resetPasswordPayload) => ({
    //     url: `${AUTH_URL}/reset-password`,
    //     method: "POST",
    //     data: resetPasswordPayload,
    //   }),
    // }),
    // forgotPassword: build.mutation({
    //   query: (forgotPasswordPayload) => ({
    //     url: `${AUTH_URL}/forgot-password`,
    //     method: "POST",
    //     data: forgotPasswordPayload,
    //   }),
    // }),
  }),
});

export const {
  useUserLoginMutation,
  useLogOutMutation,
  useLoginUserDataQuery,
  // useForgotPasswordMutation,
  // useResetPasswordMutation,
} = authApi;
