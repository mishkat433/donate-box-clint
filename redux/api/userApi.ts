
import { IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users"

export const loginDataApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        updateUserPassword: build.mutation({
            query: (userData) => ({
                url: `${USER_URL}/update-password/${userData.userId}`,
                method: "PATCH",
                data: userData,
            }),
        }),
        userBanned: build.mutation({
            query: (userData) => ({
                url: `${USER_URL}/user-banned/${userData.userId}`,
                method: "PATCH",
                data:userData
            }),
            invalidatesTags: [tagTypes.allUser],
        }),
        createUser: build.mutation({
            query: (userData) => ({
                url: `${USER_URL}/create-user`,
                method: "POST",
                data: userData,
            }),
            invalidatesTags: [tagTypes.user],
        }),
        checkAlreadyDonner: build.mutation({
            query: (userData) => ({
                url: `${USER_URL}/user-exist`,
                method: "POST",
                data: userData,
            }),
        }),
        user: build.query({
            query: (id: string | string[] | undefined) => {
                return {
                    url: `${USER_URL}/get-single-user/${id}`,
                    method: "GET",
                };
            },
            transformResponse: (response: any, meta: IMeta) => { return { meta, donner: response, } },
            providesTags: [tagTypes.user],
        }),
        
        allUsers: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: `${USER_URL}/get-user`,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response: any, meta: IMeta) => { return { meta, donner: response, } },
            providesTags: [tagTypes.allUser],
        }),

    }),
});

export const {
    useCreateUserMutation,
    useCheckAlreadyDonnerMutation,
    useUpdateUserPasswordMutation,
    useUserBannedMutation,
    useUserQuery,
    useAllUsersQuery,
    useLazyUserQuery,

} = loginDataApi;
