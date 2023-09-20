
import SigninScreen from "../screens/auth/SigninScreen";
import {createStackNavigator} from "@react-navigation/stack";
import OnBoardScreen from "../screens/auth/OnBoardScreen";
import SignupScreen from "../screens/auth/SignupScreen";


export default function AuthStack(){

    const AuthStack = createStackNavigator ();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={'OnBoard'} component={OnBoardScreen} options={{
                headerShown: false
            }}/>
            <AuthStack.Screen name={'Signin'} component={SigninScreen} options={{
                headerShown: false
            }}/>
            <AuthStack.Screen name={'Signup'} component={SignupScreen} options={{
                headerShown: false
            }}/>
        </AuthStack.Navigator>
    )
}
