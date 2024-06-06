
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

    }),
});

export const {
    useCreateUserMutation,
    useCheckAlreadyDonnerMutation,
    useUpdateUserPasswordMutation,
    useUserQuery,
    useLazyUserQuery,

} = loginDataApi;
