
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
      providesTags: [tagTypes.banner],
    }),

    // create a new banner
    addBanner: build.mutation({
      query: (data) => ({
        url: `${BANNER_URL}/create-banner`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.banner],
    }),

    // banner show controller
    showControl: build.mutation({
      query: (data) => ({
        url: `${BANNER_URL}/${data?.bannerId}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.banner],
    }),

    // delete Banner
    bannerDelete: build.mutation({
      query: (id) => ({
        url: `${BANNER_URL}/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [tagTypes.banner],
    }),

  }),
});

export const {
  useBannersQuery,
  useBannerDeleteMutation,
  useAddBannerMutation,
  useShowControlMutation,

} = bannerApi;
