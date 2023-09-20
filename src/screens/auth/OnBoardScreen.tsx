import {View, Text, ImageBackground, Image, StyleSheet} from "react-native"
import ButtonComponent from "../../components/Buttons";
import {lucyStyle} from "../../styles";
import {useNavigation} from "@react-navigation/native";

export default function OnBoardScreen(){

    const navigation = useNavigation();

    const handleNavigation = ()=>{
        navigation.navigate('Signin');
    }


    return(
        // <View>
        //     <ImageBackground style={styles.backgroundImage} source={require('./../../../assets/onboard.png') } height={100} width={100}/>
        //     <Text>OnBoard Screen</Text>
        // </View>

    <View style={styles.container}>
        <ImageBackground
            source={require('./../../../assets/onboard.png')}
            style={styles.backgroundImage}
        >
            {/* Dark overlay */}
            <View style={styles.overlay}>
                <Text style={[styles.text, lucyStyle.xl]}>Property around you</Text>
                {/* Your content */}

                <View style={[lucyStyle.mb5, lucyStyle.mt5]}>


                <ButtonComponent
                    color={'primary'} text={'Explore'} onPress={()=>{handleNavigation()}}/>
                </View>
            </View>
        </ImageBackground>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'contain' to adjust the image size
        // height: 100,
        // width: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (last value) for darkness
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white', // Text color on the dark overlay
        fontSize: 24,
        fontWeight: 'bold',
    },
});
