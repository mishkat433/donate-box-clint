
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const STATISTICS_URL = "/statistics";

export const statisticsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        statisticsInfo: build.query({
            query: () => {
                return {
                    url: STATISTICS_URL,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.donner],
        }),

    }),
});

export const { useStatisticsInfoQuery } = statisticsApi;
