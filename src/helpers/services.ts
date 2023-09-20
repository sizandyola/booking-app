import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./fetchBaseQuery";

export const emptySplitApi = createApi({
    baseQuery,
    tagTypes: ["Property", "User", "Booking"],
    endpoints: () => ({}),
});
