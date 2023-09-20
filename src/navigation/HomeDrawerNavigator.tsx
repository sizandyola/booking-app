import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";


const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="About" component={AboutScreen} />
            {/* Add more screens here if needed */}
        </Drawer.Navigator>
    )
}
