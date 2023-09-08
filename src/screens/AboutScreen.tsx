import {View, Text, Image, ScrollView} from "react-native";
import React from "react";
import {Colors, lucyStyle} from "../styles";
import {flex} from "../styles/flex";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AboutScreen() {
    return (
        <ScrollView>
            <View style={[lucyStyle.flexRow]}>
                <View>
                    <Image
                        height={200}
                        width={200}

                        source={{
                            uri: 'https://i.scdn.co/image/ab67616d0000b273ff15b3d7fa92db092e6dd15c'
                        }}/>
                </View>
                <View style={[lucyStyle.flexRow, {
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }]}>
                    <Text style={[lucyStyle.xxl, lucyStyle.ml3, lucyStyle.semiBold]}>About us</Text>
                </View>
            </View>

            <View style={[
                lucyStyle.flexRow,
                lucyStyle.justifyBetween,
                lucyStyle.mt3,
                lucyStyle.mb3,
                lucyStyle.ml3,
                lucyStyle.mr3

            ]}>

                <Ionicons name="logo-facebook" size={24}/>
                <Ionicons name="logo-instagram" size={24}/>
                <Ionicons name="logo-twitter" size={24}/>
                {/*<Text>Facebook</Text>*/}
                {/*<Text>Instagram</Text>*/}
                {/*<Text>Tiktok</Text>*/}
                {/*    Socials*/}
            </View>

            <View style={[lucyStyle.mt3, lucyStyle.ml3,
                lucyStyle.mr3]}>
                <Text style={[lucyStyle.sm, {color: Colors.gray}]}>
                    Events Around You is a dynamic and innovative company that was established with a vision to revolutionize the way people discover and engage with events in their local communities. Founded on this day [mention the establishment date], our journey has been fueled by a passion for creating a seamless and exciting platform for event enthusiasts.
                </Text>
                <Text style={[lucyStyle.sm, lucyStyle.mt1, {color: Colors.gray}]}>
                    Our upcoming app is poised to redefine the event discovery experience. With a user-friendly interface and cutting-edge technology, it will empower users to effortlessly explore a vast array of events happening in their vicinity. From concerts and cultural festivals to sports events and art exhibitions, our app will serve as the ultimate go-to destination for staying connected with the pulse of your city. We are committed to fostering a sense of community and enriching lives through unforgettable event experiences. Stay tuned for the launch of Events Around You – your gateway to a world of endless entertainment and cultural exploration right at your fingertips.
                </Text>
            </View>
        </ScrollView>
    )
}
