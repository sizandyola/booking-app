export type UserType = {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  fullname?: string;
  province?: string;
  district?: string;
  address?: string;
  phone?: number;
};
