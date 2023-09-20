import { emptySplitApi } from "odfox/helpers/services";
import { UserType } from "./userTypes";

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<UserType, void>({
      query: () => ({ url: "users/me" }),
    }),
    updateUser: build.mutation<UserType, { id: number; body: UserType }>({
      query(data) {
        const { id, body } = data;
        return {
          url: `users/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
