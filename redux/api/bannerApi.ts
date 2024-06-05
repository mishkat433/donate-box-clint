
import { IBanner, IMeta } from "../../types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BANNER_URL = "/banner";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all banners
    banners: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BANNER_URL,
          method: "GET",
          params: arg,
        };
      },

      // providesTags: [tagTypes.banner],
    }),
    // // get single room
    // room: build.query({
    //   query: (id: string | string[] | undefined) => ({
    //     url: `${BANNER_URL}/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.room],
    // }),
    // // create a new room
    // addRoom: build.mutation({
    //   query: (data) => ({
    //     url: BANNER_URL,
    //     method: "POST",
    //     data,
    //   }),
    //   invalidatesTags: [tagTypes.room],
    // }),
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

export const {
  useBannersQuery

} = bannerApi;
