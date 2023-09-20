import {
    configureStore,
    isRejected,
    Middleware,
    MiddlewareAPI,
} from "@reduxjs/toolkit";


// import toast from "react-hot-toast";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./features/auth/authSlice";
import {emptySplitApi} from "./helpers/services";
// import uploadReducer from "./odfox/features/upload/uploadSlice";

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejected()(action)) {
            const errorPayload: any = action.payload;

            if (errorPayload?.data?.error) {
                // toast.error(
                //     `${errorPayload.data.error?.status} ${errorPayload.data.error?.message}`
                // );
            }
        }
        return next(action);
    };

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // upload: uploadReducer,
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(rtkQueryErrorLogger)
            .concat([emptySplitApi.middleware]),
});

export type StoreType = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
