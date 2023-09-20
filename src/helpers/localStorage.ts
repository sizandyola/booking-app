import AsyncStorage from "@react-native-async-storage/async-storage";
import {LocalStorageKeyEnum} from "../enums/localStorageKey.enum";


export const setLocalStorage = async (key:LocalStorageKeyEnum ,value: any) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue )
    } catch(e){

    }
}

export const getLocalStorage = async(key: LocalStorageKeyEnum)=>{
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
    }
}

export const clearLocalStorage = async()=>{
    try{
        await AsyncStorage.clear();
    } catch (e){
        console.log(e)
    }
}
