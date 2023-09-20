import {store} from "../store";
import {initApp, setLoggedInUser} from "../features/auth/authSlice";
import {getLocalStorage} from "./localStorage";
import {LocalStorageKeyEnum} from "../enums/localStorageKey.enum";


export const checkAuthentication = () => {
    let token:any;
    let user;

    getLocalStorage(LocalStorageKeyEnum.userToken).then(d=>{
        token = d;
    })

    getLocalStorage(LocalStorageKeyEnum.userDetails).then(userDetails=>{
        user = userDetails;

        if (token && user) {
            store.dispatch(setLoggedInUser ({ user: user, token: token }));
        }
    })



    store.dispatch(initApp());
};
