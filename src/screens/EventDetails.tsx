import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors, lucyStyle} from "../styles";
import Card, {HorizontalImageCard} from "../components/Card";
import Avatar from "../components/Avatar";
import MapView, {Marker} from "react-native-maps";
import React, {useCallback, useEffect, useRef} from "react";
import ButtonComponent from "../components/Buttons";
import {useGetPropertyQuery} from "../features/property/propertyServices";
import BottomSheet, {BottomSheetRefProps} from "./BottomSheet";

export default function EventDetails({navigation, route}) {

    const ref = useRef<BottomSheetRefProps>(null);

    const initialRegion = {
        latitude: 27.6704274,
        longitude: 85.3239596,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const {data }= useGetPropertyQuery(route.params.propertyId)

    const bookProperty = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-200);
        }
    }, []);

    useEffect(()=>{

    },[data])

    return (
        <>
        <ScrollView>
            <View style={[{backgroundColor: Colors.neutral.main}]}>
                <View style={[lucyStyle.ml3, lucyStyle.mr3]}>
                    <HorizontalImageCard image={'http://192.168.86.47:1337'+ route.params.details.images[0].url} width={'100%'} height={250}>
                        <Text style={[lucyStyle.lg, lucyStyle.bold]}>{route.params.details.property_name}</Text>
                        <Text>Rs {route.params.details.price}</Text>

                        <Card style={lucyStyle.mt3}>
                            <View style={[lucyStyle.flexRow, lucyStyle.justifyBetween]}>
                                <Text>Date</Text>
                                <Text>Location</Text>
                            </View>
                            <View style={[lucyStyle.flexRow, lucyStyle.justifyBetween]}>
                                <Text>OCT 20 ,2023</Text>
                                <Text>{route.params.details.address}</Text>
                            </View>
                        </Card>
                    </HorizontalImageCard>
                </View>

                <View style={[styles.eventDetailsContainer, lucyStyle.pl3, lucyStyle.pr3, lucyStyle.mt3]}>

                    <Card style={lucyStyle.mt5}>
                        <View style={[lucyStyle.flexRow, lucyStyle.justifyBetween]}>
                            <Avatar></Avatar>
                            <View>
                                <Text>Owner</Text>
                            </View>
                            <View>
                                <Text>Phone</Text>
                            </View>
                        </View>
                    </Card>

                    <Text style={[lucyStyle.md, lucyStyle.bold, lucyStyle.mt3]}>About this property</Text>

                    <Text style={[lucyStyle.mt3, lucyStyle.xm, {textAlign: 'justify', color: '#8f8e8d'}]}>
                        {route.params.details.description}
                    </Text>

                    <Text style={[lucyStyle.md, lucyStyle.bold, lucyStyle.mt3, lucyStyle.mb3]}>Location</Text>
                    <View style={[{borderRadius: 25, overflow: 'hidden'}]}>
                        <MapView initialRegion={initialRegion} style={[{width: '100%', height: 200, borderRadius: 25}]}>
                            <Marker
                                coordinate={{latitude: 27.6697269, longitude: 85.325931}}
                            />
                        </MapView>
                    </View>

                    <View style={lucyStyle.mt3}>
                        <ButtonComponent color={'primary'} text={'Book this property'} onPress={bookProperty}/>
                    </View>
                </View>
            </View>

        </ScrollView>
    <BottomSheet ref={ref}>
        <View style={{ flex: 1, backgroundColor: '#ccc' }} >
            <View style={styles.container}>
                <Text style={styles.header}>Booking Details</Text>
                <View style={styles.bookingInfo}>
                    <Text style={styles.label}>Booking Date:</Text>
                    <Text style={styles.value}>{'12/12/2023'}</Text>
                </View>
                <View style={styles.bookingInfo}>
                    <Text style={styles.label}>Customer Name:</Text>
                    <Text style={styles.value}>{'Sijan Dyola'}</Text>
                </View>
                <View style={styles.bookingInfo}>
                    <Text style={styles.label}>Status:</Text>
                    <Text style={styles.value}>{'Pending'}</Text>
                </View>
                {/* Add more booking details here */}
            </View>
        </View>
    </BottomSheet>
    </>
    )
}

const styles = StyleSheet.create({
    eventDetailsContainer: {
        backgroundColor: Colors.neutral.lighter,
        borderRadius: 25,
        paddingBottom: 80
    },
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
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    bookingInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
    },
})
