
import { BookingType } from "./bookingTypes";
import { ParamsType } from "../property/propertyTypes";
import {emptySplitApi} from "../../helpers/services";
import {PaginationType} from "../../types/paginationTypes";

export const bookingApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getBookings: build.query<
      { data: BookingType[]; meta: { pagination: PaginationType } },
      ParamsType
    >({
      query: (params) => ({ url: "user/bookings", params }),
      providesTags: ["Booking"],
    }),
    getBooking: build.query<{ data: BookingType }, string>({
      query: (id) => ({
        url: `user/bookings/${id}`,
        params: { populate: "*" },
      }),
      providesTags: ["Booking"],
    }),
    addBooking: build.mutation<BookingType, { property_id: number }>({
      query({ property_id }) {
        return {
          url: `user/bookings`,
          method: "POST",
          body: { property_id },
        };
      },
      invalidatesTags: ["Booking"],
    }),
    cancelBooking: build.mutation<any, { id: number }>({
      query(data) {
        const { id } = data;
        return {
          url: `user/bookings/${id}/cancel`,
          method: "POST",
        };
      },
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingQuery,
  useAddBookingMutation,
  useCancelBookingMutation,
} = bookingApi;
