import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeStack from "./HomeStack";
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../styles";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
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
                name="Events"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => {
                        return (
                            <Ionicons name='calendar-outline' size={24} color={color}/>
                        )
                    }
                }}/>
            <Tab.Screen name="About" component={AboutScreen}
                        options={{
                            headerShown: true,
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
                            tabBarIcon: ({color}) => {
                                return (
                                    <Ionicons name='call-outline' size={24} color={color}/>
                                )
                            }
                        }}
            />
        </Tab.Navigator>
    )
}
