import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ChangePasswordBodyType, LoginType, RegisterType } from "./authTypes";
import {api} from "../../helpers/api";
import {clearLocalStorage, setLocalStorage} from "../../helpers/localStorage";
import {LocalStorageKeyEnum} from "../../enums/localStorageKey.enum";
import Snackbar from "react-native-snackbar";
import {useNavigation} from "@react-navigation/native";
import {ChangePasswordBodyType, LoginType, RegisterType} from "./authTypes";


let authRequest = {
    userLogin: (body: LoginType) => api .post("api/auth/local", body),
    register: (body: RegisterType) => api.post("api/auth/local/register", body),
    changePassword: (body: ChangePasswordBodyType) =>
        api.post("api/auth/change-password", body),
    resetPassword: (email: string) =>
        api.post("api/auth/forgot-password", { email }),
};

export const userLogout = createAsyncThunk(
    "auth/logout",
    async ()=>{
        try{
            await clearLocalStorage();
        }catch(error){
            console.log(error)
        }
    }
)

export const userLogin = createAsyncThunk(
    "auth/login",
    async (body: LoginType, { rejectWithValue }) => {
        try {
            const { data } = await authRequest.userLogin(body);

            await setLocalStorage(LocalStorageKeyEnum.userToken, data.jwt);
            await setLocalStorage(LocalStorageKeyEnum.userDetails, data.user);

            // localStorage.setItem("userToken", data.jwt);
            // localStorage.setItem("user", JSON.stringify(data.user));

            // toast.success("Logged In");

            alert("Login successful")

            return data;
        } catch (err) {
            alert("Login failed, check your credentials")
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data?.error?.message ?? "error");
            } else {
                return "error";
            }
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (body: RegisterType, { rejectWithValue }) => {

        try {
            const { data } = await authRequest.register(body);

            // toast.success("Thank you for registering");
            alert("User created successfully");


            return data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data?.error?.message ?? "error");
            } else {
                return "error";
            }
        }
    }
);

// export const changePassword = createAsyncThunk(
//     "auth/change-password",
//     async (body: ChangePasswordBodyType, { rejectWithValue }) => {
//         try {
//             const { data } = await authRequest.changePassword(body);
//
//             toast.success("Your password has been changed");
//
//             return data;
//         } catch (err) {
//             if (axios.isAxiosError(err)) {
//                 return rejectWithValue(err.response?.data?.error?.message ?? "error");
//             } else {
//                 return "error";
//             }
//         }
//     }
// );
//
// export const resetPassword = createAsyncThunk(
//     "auth/reset-password",
//     async (email: string, { rejectWithValue }) => {
//         try {
//             const { data } = await authRequest.resetPassword(email);
//
//             toast.success(
//                 "A password reset link has been sent to your email address"
//             );
//
//             return data;
//         } catch (err) {
//             if (axios.isAxiosError(err)) {
//                 return rejectWithValue(err.response?.data?.error?.message ?? "error");
//             } else {
//                 return "error";
//             }
//         }
//     }
// );
