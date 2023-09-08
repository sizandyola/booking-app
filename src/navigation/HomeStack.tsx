import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import {View, Text} from "react-native";
import Avatar from "../components/Avatar";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();
export default function HomeStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                    headerStyle: {
                        backgroundColor: "transparent",
                        shadowColor: "#ccc", // iOS
                        elevation: 0, // Android
                    },
                    headerTintColor: "#222",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
        >
            <Stack.Screen name="Home" component={HomeScreen}
            options={{
                title: "Events",
                headerLeft:()=>(
                    <View style={[{marginLeft: 15, }]  }>
                        <Ionicons name="menu-outline" size={28}/>
                    </View>
                ),
                headerRight:()=>(
                    <View style={[{marginRight: 15, }]  }>
                        <Avatar size={24}/>
                    </View>
                )
            }}
            />
            <Stack.Screen name="Details" component={DetailsScreen}/>
            {/*<Stack.Screen name="Details" component={HomeScreen}/>*/}
        </Stack.Navigator>
    )
}
