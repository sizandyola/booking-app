import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Colors, lucyStyle} from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function FeaturedImageCard({event}) {

    return (
        <View style={[styles.cardContainer]}>
            <View style={[lucyStyle.flexColumn, styles.featuredImageCardContainer]}>
                <Image style={styles.featuredImageCardContainer} source={{
                    uri: "http://192.168.86.47:1337" + event?.images[0]?.url
                }}/>
                <View style={[styles.featuredImageOverlayTextContainer]}>
                    <Text style={[styles.date]}>Rs {event.price}</Text>
                </View>
            </View>
            <View style={[lucyStyle.mt2,  {backgroundColor: '#fff'}]}>
                <Text style={[lucyStyle.md, lucyStyle.bold, lucyStyle.textMedium]}>{event.property_name}</Text>
                <View style={[lucyStyle.flexRow, {alignItems:'center'}]}>
                    <Ionicons name={'location'} color={Colors.secondary.brand}/>
                    <Text style={[lucyStyle.xm, {color: Colors.secondary.brand}]}>{event.address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
        borderRadius: 5
    },
    featuredImageCardContainer: {
        height: 180,
        width: '100%',
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    featuredImage: {
        // position: 'relative'
    },
    featuredImageOverlayTextContainer: {
        position: "absolute",
        backgroundColor: 'rgba(189, 195, 199, 0.5)',
        top: 5,
        left: 5,
        color: '#fff',
        borderRadius: 5
    },
    date: {
        color: '#fff',
        padding: 3
    }

})
