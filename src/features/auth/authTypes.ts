import { UserType } from "../user/userTypes";

export type LoginType = {
    identifier: string;
    password: string;
};

export type RegisterType = {
    email: string;
    username: string;
    password: string;
    fullname: string;
    province: string;
    district: string;
    address: string;
    phone: string;
};

export type AuthState = {
    appInit: boolean;
    authenticated: boolean;
    loading: boolean;
    user: UserType;
    token?: string;
    error?: string;
    changePasswordLoading?: boolean;
    passwordResetLoading?: boolean;
};

export type ChangePasswordBodyType = {
    password: string;
    currentPassword: string;
    passwordConfirmation: string;
};
