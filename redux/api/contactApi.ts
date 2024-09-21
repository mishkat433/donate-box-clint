
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CONTACT_URL = "/contact";

export const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //get all banners
        // banners: build.query({
        //     query: (arg: Record<string, any>) => {
        //         return {
        //             url: CONTACT_URL,
        //             method: "GET",
        //             params: arg,
        //         };
        //     },
        //     providesTags: [tagTypes.banner],
        // }),

        // send message
        addMessage: build.mutation({
            query: (data) => ({
                url: `${CONTACT_URL}/create-message`,
                method: "POST",
                data,
            }),
        }),

        // banner show controller
        // showControl: build.mutation({
        //     query: (data) => ({
        //         url: `${CONTACT_URL}/${data?.bannerId}`,
        //         method: "PATCH",
        //         data,
        //     }),
        //     invalidatesTags: [tagTypes.banner],
        // }),

        // delete Banner
        // bannerDelete: build.mutation({
        //     query: (id) => ({
        //         url: `${CONTACT_URL}/${id}`,
        //         method: "DELETE"
        //     }),
        //     invalidatesTags: [tagTypes.banner],
        // }),

    }),
});

export const {
    useAddMessageMutation,

} = contactApi;
