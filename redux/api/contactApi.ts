
import { IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CONTACT_URL = "/contact";

export const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get contact message
        allContactMessage: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: CONTACT_URL,
                    method: "GET",
                    params: arg,
                };
            },
            // transformResponse: (response, meta: IMeta,) => { return { contactInfo: response, meta, } },
            providesTags: [tagTypes.contact],
        }),

        addMessage: build.mutation({
            query: (data) => ({
                url: `${CONTACT_URL}/create-contact-message`,
                method: "POST",
                data,
            }),
        }),

        // update contact messages
        updateContactMessage: build.mutation({
            query: (data) => ({
                url: `${CONTACT_URL}/update-contact-message/${data?.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.contact],
        }),

        // delete contact message
        contactMessageDelete: build.mutation({
            query: (id) => ({
                url: `${CONTACT_URL}/delete-contact-message/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [tagTypes.contact],
        }),

    }),
});

export const {
    useAllContactMessageQuery,
    useAddMessageMutation,
    useContactMessageDeleteMutation,
    useUpdateContactMessageMutation

} = contactApi;
