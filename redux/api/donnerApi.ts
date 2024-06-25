
import { IBanner, IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DONNER_URL = "/bloodDonner";

export const donnerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //get all donner
        donner: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: DONNER_URL,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response, meta: IMeta, message) => { return { meta, donner: response, message } },
            providesTags: [tagTypes.donner],
        }),
//  create donner
        addDonner: build.mutation({
            query: (data) => ({
                url: `${DONNER_URL}/create-donner`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.donner],
        }),
     
    }),
});

export const { useDonnerQuery, useAddDonnerMutation } = donnerApi;
