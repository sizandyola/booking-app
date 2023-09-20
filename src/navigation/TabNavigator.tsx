import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeStack from "./HomeStack";
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../styles";
import AccountScreen from "../screens/account/AccountScreen";
import PropertyList from "../screens/PropertyList";
import HomeDrawerNavigator from "./HomeDrawerNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                paddingTop: 7,
                paddingBottom: 15,
                height: 64,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderLeftWidth: 0.2,
                borderRightWidth: 0.2,
                position: 'absolute',
                overflow: 'hidden',
                backgroundColor: '#fff',

            },
            tabBarActiveTintColor: Colors.primary.brand,
            tabBarInactiveTintColor: 'gray'
        }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => {
                        return (
                            <Ionicons name='home' size={24} color={color}/>
                        )
                    }
                }}/>
            <Tab.Screen
                name="Property List"
                component={PropertyList}
                options={{
                    headerShown: true,
                    tabBarIcon: ({color}) => {
                        return (
                            <Ionicons name='calendar-outline' size={24} color={color}/>
                        )
                    }
                }}/>
            <Tab.Screen name="About" component={HomeDrawerNavigator}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color}) => {
                                return (
                                    <Ionicons name='md-help-circle-outline' size={24} color={color}/>
                                )
                            }
                        }}
            />
            <Tab.Screen name="Contact" component={ContactScreen}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                height: 120,
                                // backgroundColor: '#2C2C2C',
                                // borderBottomLeftRadius : 20,
                                // borderBottomRightRadius : 20
                            },
                            headerTitleStyle: {
                                // color: '#fff'
                            },
                            tabBarIcon: ({color}) => {
                                return (
                                    <Ionicons name='call-outline' size={24} color={color}/>
                                )
                            }
                        }}
            />

            <Tab.Screen name="Account" component={AccountScreen}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                height: 120,
                                // backgroundColor: '#2C2C2C',
                                // borderBottomLeftRadius : 20,
                                // borderBottomRightRadius : 20
                            },
                            headerTitleStyle: {
                                // color: '#fff'
                            },
                            tabBarIcon: ({color}) => {
                                return (
                                    <Ionicons name='person' size={24} color={color}/>
                                )
                            }
                        }}
            />
        </Tab.Navigator>
    )
}
