import {PaginationType} from "../../types/paginationTypes";
import {ImageType} from "../../types/imageTypes";


export type AddPropertyType = {
  property_name?: string;
  price?: number;
  province?: string;
  district?: string;
  address?: string;
  images?: string[];
  videos?: string[];
  google_map_url?: string;
  description?: string;
  contact?: string;
  property_type?: string;
  status?: "available";
  imageFiles?: any[];
};

export type ParamsType = {
  sort?: string;
  "pagination[withCount]"?: boolean;
  "pagination[page]"?: number;
  "pagination[pageSize]"?: number;
  "pagination[start]"?: number;
  "pagination[limit]"?: number;
  fields?: string;
  populate?: string;
  locale?: string;
  [key: string]: string | boolean | number | undefined | null;
};

export type PropertyResponseType = {
  data?: PropertyType[];
  meta?: Meta;
};

export type Meta = {
  pagination?: PaginationType;
};

export type PropertyType = {
  id?: number;
  property_name?: string;
  price?: number;
  province?: string;
  district?: string;
  address?: string;
  google_map_url?: string;
  description?: string;
  contact?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  images?: ImageType[];
  videos?: null;
  property_type?: PropertyTypeType;
};

export type PropertyDetailResponseType = {
  data?: PropertyType;
};

export type PropertyTypeType = {
  id?: number;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image_url?: ImageType;
};

export type PropertyTypeResponseType = {
  data?: PropertyTypeType[];
  meta?: {
    pagination?: PaginationType;
  };
};
