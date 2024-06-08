import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADMIN_URL = "/admin";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
            createAdmin: build.mutation({
              query: (data) => ({
                url: `${ADMIN_URL}/create-admin`,
                method: "POST",
                data,
                // contentType: "multipart/form-data",
              }),
              // invalidatesTags: [tagTypes.admin],
            }),

        //     admins: build.query({
        //       query: (arg: Record<string, any>) => {
        //         return {
        //           url: ADMIN_URL,
        //           method: "GET",
        //           params: arg,
        //         };
        //       },
        //       transformResponse: (response: IAdmin[], meta: IMeta) => {
        //         return {
        //           admins: response,
        //           meta,
        //         };
        //       },
        //       // providesTags: [tagTypes.admin],
        //     }),
        getSingleAdmin: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${ADMIN_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.admin],
        }),
        //     updateAdmin: build.mutation({
        //       query: (data) => ({
        //         url: `${ADMIN_URL}/${data.id}`,
        //         method: "PATCH",
        //         data: data.body,
        //       }),
        //       // invalidatesTags: [tagTypes.admin],
        //     }),
        //     deleteAdmin: build.mutation({
        //       query: (id) => ({
        //         url: `${ADMIN_URL}/${id}`,
        //         method: "DELETE",
        //       }),
        //       // invalidatesTags: [tagTypes.admin],
        //     }),
    }),
});

export const {
    // useGetSingleAdminQuery,
    useCreateAdminMutation,
   useGetSingleAdminQuery
} = adminApi;