import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import ButtonComponent from "../../components/Buttons";
import {clearLocalStorage} from "../../helpers/localStorage";
import {useAppDispatch} from "../../store";
import {logout} from "../../features/auth/authSlice";
import {userLogout} from "../../features/auth/authActions";
import {Colors, lucyStyle} from "../../styles";
import {useNavigation} from "@react-navigation/native";

export default function AccountScreen(){

    const dispatch = useAppDispatch();

    const navigation = useNavigation();


    const handleLogout = ()=>{
        dispatch(userLogout());
    }

    return(
        <View>
            <View style={styles.container}>
                <View
                    style={[
                        styles.avatarWrapper,


                    ]}
                >
                    {/* <Avatar.Image size={100} source={require('../../assets/images/profile.png')} /> */}
                    {/* <Text style={cjstyle.heading1}>Hello, </Text> */}

                    <Text style={lucyStyle.md}>{'Sijan Dyola'}</Text>

                    <Text style={[lucyStyle.md, lucyStyle.mt2]}>{'sizandyola'}</Text>
                    <Text style={lucyStyle.md}>{'geminisizan@gmail.com'}</Text>


                    <Text style={lucyStyle.md}>{'9860982697'}</Text>





                    {/* <Text style={styles.subtitle}>geminisizan@gmail.com</Text> */}
                </View>

                <View style={[styles.accountSettingWrapper, lucyStyle.mt5]}>
                    <Text style={styles.boldSubtitle}>Account Settings</Text>
                </View>

                <View style={{}}>
                    {/* <TouchableOpacity style={styles.itemWrapper} onPress={()=> navigation.navigate('EditProfile')}>
        <Text style={styles.itemText}>Edit Profile</Text>
    </TouchableOpacity> */}

                    {/* <TouchableOpacity
              style={styles.itemWrapper}
              onPress={() => navigation.navigate("Notifications")}
            >
              <Text style={styles.itemText}>Notifications</Text>
            </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.itemWrapper}
                        onPress={() => navigation.navigate("ChangePassword")}
                    >
                        <Text style={styles.itemText}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemWrapper} onPress={()=> navigation.navigate('PaymentSettings')}>
                        <Text  style={styles.itemText}>Payment Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemWrapper} onPress={handleLogout}>
                        <Text style={styles.itemText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 20
    },
    avatarWrapper: {
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        paddingVertical: 20,
    },
    titleLg: {

        color: "#000300",
        fontSize: 24,
    },
    subtitle: {

        color: Colors.primary.brand ,
        fontSize: 14,
    },
    accountSettingWrapper: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    boldSubtitle: {

        color: "black",
        fontSize: 14,
    },
    itemWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#fff",
        marginTop: 1,
    },
    itemText: {

    },
});
