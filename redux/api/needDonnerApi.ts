
import { IBanner, IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DONNER_URL = "/needDonner";

export const donnerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //get all request
        // donner: build.query({
        //     query: (arg: Record<string, any>) => {
        //         return {
        //             url: DONNER_URL,
        //             method: "GET",
        //             params: arg,
        //         };
        //     },
        //     transformResponse: (response, meta: IMeta, message) => { return { meta, donner: response, message } },
        //     providesTags: [tagTypes.donner],
        // }),
        //  create donner
        requestForDonner: build.mutation({
            query: (data) => ({
                url: `${DONNER_URL}/create-request`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.bloodRequest],
        }),

    }),
});

export const { useRequestForDonnerMutation } = donnerApi;
