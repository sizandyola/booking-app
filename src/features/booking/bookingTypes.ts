import { PropertyType } from "../property/propertyTypes";

export type BookingType = {
  id?: number;
  property?: PropertyType;
  status?: "processing" | "cancelled";
  createdAt?: Date;
};
