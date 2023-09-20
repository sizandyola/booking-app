import {View, Text, TextInput, StyleSheet, ScrollView} from "react-native";
import React from "react";
import MapView, {Marker} from "react-native-maps";
import {lucyStyle} from "../styles";
import Input from "../components/Input";
import ButtonComponent from "../components/Buttons";
import {useFormik} from "formik";

export default function ContactScreen() {
    const initialRegion = {
        latitude: 27.6704274,
        longitude: 85.3239596,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    }

    const ContactForm = ()=>{

        const formik = useFormik({
            initialValues:{
                email: '',
            },
            onSubmit: values=>{
                // console.log("Values", values)
            }
        })

    }

    return (
        <ScrollView>
            <MapView initialRegion={initialRegion} style={[{width: '100%', height: 200}]}>
                <Marker
                    coordinate={{latitude: 27.6697269, longitude: 85.325931}}
                />
            </MapView>

            <View style={[styles.contactContainer, lucyStyle.pt3]}>
                <View style={[lucyStyle.ml3, lucyStyle.mr3]}>
                    <Text style={[lucyStyle.lg, lucyStyle.bold, lucyStyle.textCenter]}>Quick Contact</Text>
                    <View style={[lucyStyle.mt3]}>
                        <Input
                            placeholder='Enter your full name'
                            label={'Name'} error={''} iconName={'asd'} password={false}/>

                        <Input
                            placeholder='Enter your email'
                            label={'Email'} error={''} iconName={'asd'} password={false}/>

                        <Input
                            placeholder='Enter your message'
                            label={'Message'} error={''} iconName={'asd'} password={false}/>

                        <ButtonComponent text={'Send'} color={'primary'}/>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%'
    },

})
