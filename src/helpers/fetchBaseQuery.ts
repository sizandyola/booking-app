import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query";

import { baseURL } from "./api";
// import { logout } from "odfox/features/auth/authSlice";
// import { toast } from "react-hot-toast";
import {RootState,store} from "../store";

export const bq = fetchBaseQuery({
    baseUrl: `${baseURL}/api`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

export const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await bq(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // toast.error("Session has expired. Please login");
        //
        // store.dispatch(logout());
    }
    return result;
};
