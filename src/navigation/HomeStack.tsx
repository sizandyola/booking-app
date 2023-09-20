import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import {View, Text, TouchableOpacity} from "react-native";
import Avatar from "../components/Avatar";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeDrawerNavigator from "./HomeDrawerNavigator";
import {Colors, lucyStyle} from "../styles";
import EventDetails from "../screens/EventDetails";
import {useNavigation} from "@react-navigation/native";
import ShapeAnimation from "../screens/animation-playground/ShapeAnimation";
import ClickAnimation from "../screens/animation-playground/ClickAnimation";

const Stack = createStackNavigator();
export default function HomeStack(){

    const navigation = useNavigation();

    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <Stack.Navigator
            screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.neutral.main,
                        shadowColor: "#ccc", // iOS
                        elevation: 0, // Android
                    },
                    headerTintColor: "#222",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
        >
            {/*<Stack.Screen name={'Shape'} component={ShapeAnimation}/>*/}
            {/*<Stack.Screen name={'Click animation'} component={ClickAnimation}/>*/}

            <Stack.Screen name="Home" component={HomeScreen}
            options={{
                title: "",
                headerLeft:()=>(
                    <View style={[{marginLeft: 15, }, lucyStyle.flexRow] }>
                        <View style={[lucyStyle.flexRow]}>
                            <Avatar size={34}/>

                            <View style={[lucyStyle.flexColumn, lucyStyle.ml2] }>
                                <View style={[lucyStyle.flexRow]}>
                                    <Text>Hello, Sijan</Text>
                                </View>
                                <View style={[lucyStyle.flexRow, {alignItems:'center'}]}>
                                    <Ionicons name={'location'} style={[{color: Colors.secondary.brand}]}/>
                                    <Text style={[{color: Colors.secondary.brand}]}>Gwarko</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                ),
                headerRight:()=>(
                    <View style={[{marginRight: 15, }]  }>
                        <Ionicons name={'notifications'} size={24} color={Colors.secondary.brand}/>
                    </View>
                )
            }}
            />
            <Stack.Screen name="Event details" component={EventDetails}
            options={{
                headerLeft: ()=>(
                    <TouchableOpacity onPress={goBack} style={[lucyStyle.ml3,
                        {borderColor: Colors.primary.brand ,
                        borderWidth: 1,
                            borderRadius: 5
                        }
                    ]}>
                        <Ionicons name={'arrow-back'} size={28} color={Colors.primary.brand}/>
                    </TouchableOpacity>
                ),
                headerRight: ()=>(
                    <TouchableOpacity onPress={goBack} style={[lucyStyle.mr3,
                        {borderColor: Colors.primary.brand ,
                            borderWidth: 1,
                            borderRadius: 5
                        }
                    ]}>
                    <Ionicons name={'bookmark'} size={28} color={Colors.primary.brand} />
                    </TouchableOpacity>
                )
            }}
            />
            {/*<Stack.Screen name="Details" component={HomeScreen}/>*/}
        </Stack.Navigator>
    )
}
