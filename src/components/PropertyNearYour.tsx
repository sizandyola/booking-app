import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {Colors, lucyStyle} from "../styles";
import {events} from "../data/events.js";
import FeaturedImageCard from "./FeaturedImageCard";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {useGetPropertiesQuery, useGetPropertyTypesQuery} from "../features/property/propertyServices";


export default function PropertyNearYou(){

    const navigation = useNavigation();

    const {data} = useGetPropertiesQuery(
        {
            populate: "*",
            "pagination[pageSize]": 8,
        }
    );
    const handleEventDetails = (event)=>{
        navigation.navigate('Event details', {propertyId: event.id, details: event});
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[lucyStyle.mt3]}>
            {data?.data?.map(event => (
                <TouchableOpacity onPress={()=>handleEventDetails(event)} style={[styles.carouselCardItem, lucyStyle.mr4]} key={event.property_name}>
                    <FeaturedImageCard event={event}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.neutral.main,
    },
    homeContentWrapper: {
        backgroundColor: Colors.neutral.lighter,
        borderRadius: 24,
        marginTop: -5,
        paddingTop: 15,
        paddingLeft: 15,
    },
    carouselCardItem: {
        // marginLeft: 10,

        // width: 150,
        // height: 150
    },
    amazingEventsTitle: {
        fontSize: 18,
        color: '#3C617D',
        fontWeight: 'bold'
    },
    button: {
        height: 50,
        borderRadius: 25,
        aspectRatio: 1,
        backgroundColor: 'white',
        opacity: 0.6,
    },
})
