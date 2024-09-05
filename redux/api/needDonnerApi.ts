
import { IBanner, IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REQUEST_URL = "/needDonner";

export const donnerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //get all request
        allRequests: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: REQUEST_URL,
                    method: "GET",
                    params: arg,
                };
            },
            providesTags: [tagTypes.bloodRequest],
        }),

        // get single request
        getPendingRequests: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: `${REQUEST_URL}/pending-request`,
                    method: "GET",
                    params: arg,
                };
            },
            providesTags: [tagTypes.bloodRequest],
        }),

        myRequests: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: `${REQUEST_URL}/my-request`,
                    method: "GET",
                    params: arg,
                };
            },
            providesTags: [tagTypes.bloodRequest],
        }),

        //  create donner
        requestForDonner: build.mutation({
            query: (data) => ({
                url: `${REQUEST_URL}/create-request`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.bloodRequest],
        }),

        assignDonner: build.mutation({
            query: (data) => ({
                url: `${REQUEST_URL}/decide-request/${data?.id}`,
                method: "PATCH",
                data,
            }),
            invalidatesTags: [tagTypes.bloodRequest],
        }),
        myActivity: build.query({
            query: (id) => {
                return {
                    url: `${REQUEST_URL}/my-activity/${id}`,
                    method: "GET",
                    // params: arg,
                };
            },
            // providesTags: [tagTypes.bloodRequest],
        }),
    }),
});

export const {
    useAllRequestsQuery,
    useRequestForDonnerMutation,
    useGetPendingRequestsQuery,
    useAssignDonnerMutation,
    useMyRequestsQuery,
    useMyActivityQuery

} = donnerApi;
