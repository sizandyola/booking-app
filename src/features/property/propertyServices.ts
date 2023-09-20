
import {
  AddPropertyType,
  ParamsType,
  PropertyDetailResponseType,
  PropertyResponseType,
  PropertyType,
  PropertyTypeResponseType,
} from "./propertyTypes";
import {emptySplitApi} from "../../helpers/services";

export const propertyApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query<PropertyResponseType, ParamsType>({
      query: (params) => ({ url: "properties", params }),
      providesTags: ["Property"],
    }),
    getProperty: build.query<PropertyDetailResponseType, string>({
      query: (id) => ({ url: `properties/${id}`, params: { populate: "*" } }),
      providesTags: ["Property"],
    }),
    getUserProperties: build.query<PropertyResponseType, ParamsType>({
      query: (params) => ({ url: "user/properties", params }),
      providesTags: ["Property"],
    }),
    addProperty: build.mutation<{ data: PropertyType }, AddPropertyType>({
      query(body) {
        return {
          url: `properties?populate=*`,
          method: "POST",
          body: { data: body },
        };
      },
      invalidatesTags: ["Property"],
    }),
    updateProperty: build.mutation<
      PropertyType,
      { id: number; body: AddPropertyType }
    >({
      query(data) {
        const { id, body } = data;
        return {
          url: `user/properties/${id}`,
          method: "PUT",
          body: { data: body },
        };
      },
      invalidatesTags: ["Property"],
    }),
    deleteProperty: build.mutation<any, { id: number }>({
      query(data) {
        const { id } = data;
        return {
          url: `user/properties/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Property"],
    }),
    getPropertyTypes: build.query<PropertyTypeResponseType, void>({
      query: () => ({ url: `property-types`, params: { populate: "*" } }),
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useUpdatePropertyMutation,
  useGetPropertyTypesQuery,
  useGetUserPropertiesQuery,
  useDeletePropertyMutation,
  useAddPropertyMutation,
} = propertyApi;
