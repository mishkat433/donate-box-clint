
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
        // // get single room
        // room: build.query({
        //   query: (id: string | string[] | undefined) => ({
        //     url: `${BANNER_URL}/${id}`,
        //     method: "GET",
        //   }),
        //   providesTags: [tagTypes.room],
        // }),
        // // create a new donner
        addDonner: build.mutation({
            query: (data) => ({
                url: `${DONNER_URL}/create-donner`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.donner],
        }),
        // // update room
        // updateRoom: build.mutation({
        //   query: (data) => ({
        //     url: `${BANNER_URL}/${data.id}`,
        //     method: "PATCH",
        //     data: data.body,
        //   }),
        //   invalidatesTags: [tagTypes.room],
        // }),
        // // delete room
        // deleteRoom: build.mutation({
        //   query: (id) => ({
        //     url: `${BANNER_URL}/${id}`,
        //     method: "DELETE",
        //   }),
        //   invalidatesTags: [tagTypes.room],
        // }),
    }),
});

export const { useDonnerQuery, useAddDonnerMutation } = donnerApi;
