import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";

import 'react-native-gesture-handler';

import {
    useFonts,
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';
import NavigationController from "./src/navigation/NavigationController";
import {Provider} from "react-redux";
import {store, useAppSelector} from "./src/store";
import {useEffect} from "react";
import {checkAuthentication} from "./src/helpers/checkAuthentication";

// export default () => {
//     let [fontsLoaded] = useFonts({
//         SansRegular: PTSans_400Regular,
//         SansRegularItalic: PTSans_400Regular_Italic,
//         SansBold: PTSans_700Bold,
//         SansBoldItalic: PTSans_700Bold_Italic,
//     });



export default function App() {

    return (
        <Provider store={store}>
        <NavigationController/>
        </Provider>
        // <NavigationContainer>
        //     {/*<View style={styles.container}>*/}
        //     {/*    <Text>Open up App.tsx to start working on your app!</Text>*/}
        //     {/*    <StatusBar style="auto"/>*/}
        //     {/*</View>*/}
        //     <NavigationController/>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
