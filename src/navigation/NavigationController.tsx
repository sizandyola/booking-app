import {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import {useAppSelector} from "../store";
import {checkAuthentication} from "../helpers/checkAuthentication";
import {Text} from "react-native";

export default function NavigationController(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { appInit, authenticated } = useAppSelector((state) => state.auth);

    useEffect(()=>{
        checkAuthentication();

    },[authenticated, appInit])

    return(
        <NavigationContainer>
            {
                authenticated ? <TabNavigator/> : <AuthStack/>

            }

        </NavigationContainer>

    )
}
