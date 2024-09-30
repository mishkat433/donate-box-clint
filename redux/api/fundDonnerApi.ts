
import { IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DONNER_URL = "/fundDonner";

export const fundDonnerApi = baseApi.injectEndpoints({
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
            providesTags: [tagTypes.fundDonner],
        }),
        //  init-payment
        initPayment: build.mutation({
            query: (data) => ({
                url: `${DONNER_URL}/init-payment`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.fundDonner],
        }),

    }),
});

export const { useInitPaymentMutation } = fundDonnerApi;
