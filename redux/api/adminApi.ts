import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IAdmin, IMeta } from "../../types";

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
      invalidatesTags: [tagTypes.allAdmins],
    }),

    getAllAdmins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${ADMIN_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.allAdmins],
    }),

    getSingleAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),

    adminBanned: build.mutation({
      query: (adminData) => ({
          url: `${ADMIN_URL}/admin-banned/${adminData.adminId}`,
          method: "PATCH",
          data: adminData
      }),
      invalidatesTags: [tagTypes.allAdmins],
  }),
    //     updateAdmin: build.mutation({
    //       query: (data) => ({
    //         url: `${ADMIN_URL}/${data.id}`,
    //         method: "PATCH",
    //         data: data.body,
    //       }),
    //       // invalidatesTags: [tagTypes.admin],
    //     }),
        deleteAdmin: build.mutation({
          query: (id) => ({
            url: `${ADMIN_URL}/${id}`,
            method: "DELETE",
          }),
          invalidatesTags: [tagTypes.allAdmins],
        }),

        requestHandler: build.mutation({
          query: ({status, adminId}) => ({
            url: `${ADMIN_URL}/admin-request/${adminId}`,
            method: "PATCH",
            data: {status},
          }),
          invalidatesTags: [tagTypes.allAdmins],
        }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useCreateAdminMutation,
  useGetSingleAdminQuery,
  useAdminBannedMutation,
  useDeleteAdminMutation,
  useRequestHandlerMutation
} = adminApi;
