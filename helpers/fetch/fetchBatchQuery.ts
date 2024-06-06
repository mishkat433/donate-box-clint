import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const customFetchBaseQuery = (baseUrl: string) => {
    const baseQuery = fetchBaseQuery({ baseUrl });

    return async (args: any, api: any, extraOptions: any) => {
        const result = await baseQuery(args, api, extraOptions);
        // You can handle custom logic here (e.g., checking for specific error statuses, adding headers, etc.)

        if (result.error) {
            // Handle errors in a custom way if needed
            return result.error
        }

        return result;
    };
};

export default customFetchBaseQuery;