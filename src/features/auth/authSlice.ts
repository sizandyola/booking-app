import { createSlice } from "@reduxjs/toolkit";
import {
    register,

    userLogin, userLogout,
} from "./authActions";
import {clearLocalStorage} from "../../helpers/localStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AuthState } from "./authTypes";

const initialState: any = {
    appInit: false,
    loading: false,
    authenticated: false,
    user: {},
    changePasswordLoading: false,
    passwordResetLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.authenticated = true;
        },
        initApp: (state) => {
            state.appInit = true;
        },
        logout: (state) => {

            //
            // localStorage.removeItem("userToken");
            // localStorage.removeItem("user");
            // state.authenticated = false;
            // state.user = {};
            // state.token = undefined;
            //
            // AsyncStorage.clear().then(d=>{
            //     state.authenticated = false;
            //     state.user = {};
            //     state.token = undefined;
            // }).catch(error=>{
            //     console.log("Error", error)
            // })
        },
        resetError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.authenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.jwt;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(userLogout.fulfilled,(state)=>{
                state.authenticated = false;
                state.user = {};
                state.token = undefined;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // .addCase(changePassword.pending, (state) => {
            //     state.changePasswordLoading = true;
            // })
            // .addCase(changePassword.fulfilled, (state, action) => {
            //     state.changePasswordLoading = false;
            //     state.token = action.payload?.jwt;
            // })
            // .addCase(changePassword.rejected, (state, action) => {
            //     state.changePasswordLoading = false;
            //     state.error = action.payload as string;
            // })
            // .addCase(resetPassword.pending, (state) => {
            //     state.passwordResetLoading = true;
            // })
            // .addCase(resetPassword.fulfilled, (state, action) => {
            //     state.passwordResetLoading = false;
            // })
            // .addCase(resetPassword.rejected, (state, action) => {
            //     state.passwordResetLoading = false;
            //     state.error = action.payload as string;
            // });
    },
});

export const { logout, resetError, setLoggedInUser, initApp } =
    authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
