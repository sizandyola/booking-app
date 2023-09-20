import {ScrollView, Text, View, StyleSheet, useColorScheme, Image, TouchableOpacity, Animated} from "react-native";
import ButtonComponent from "../components/Buttons";
import Card, {HorizontalImageCard, ImagedCard} from "../components/Card";
import {Colors, lucyStyle} from "../styles";
import Avatar from "../components/Avatar";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AboutScreen from "./AboutScreen";
import FeaturedImageCard from "../components/FeaturedImageCard";
import Input from "../components/Input";
import Pills from "../components/Pills";
import {eventCategories} from "../data/category";
import {events} from "../data/events.js";
import React, {useCallback, useEffect, useRef} from "react";
import {useNavigation} from "@react-navigation/native";
import BottomSheet, {BottomSheetRefProps} from "./BottomSheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useGetPropertiesQuery, useGetPropertyTypesQuery} from "../features/property/propertyServices";
import FeaturedCategory from "../components/FeaturedCategory";
import PropertyNearYou from "../components/PropertyNearYour";

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const ref = useRef<BottomSheetRefProps>(null);

    const navigation = useNavigation();

    // const {data, isLoading} = useGetPropertiesQuery({
    //     populate: "*",
    //     "pagination[pageSize]": 8,
    // })


    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-200);
        }
    }, []);

    const handleEventDetails = ()=>{
        navigation.navigate('Event details');
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <View>

            {/*<FeaturedImageCard/>*/}

            <Animated.View style={[styles.headerWrapper, {
                transform: [
                    {
                        translateY: scrollY.interpolate({
                            inputRange: [0, 50],
                            outputRange: [0, -50], // Adjust this value to control the sticky effect.
                            extrapolate: "clamp",
                        }),
                    },
                ]
            },]}>
                <Text style={[lucyStyle.ml3, styles.amazingEventsTitle, lucyStyle.mt5]}>Find properties near you</Text>

                <View style={[lucyStyle.ml3, lucyStyle.mr3]}>
                    <Input label={'Search'} placeholder={'Search properties'}  onFocus={onPress}/>
                </View>
            </Animated.View>

            <ScrollView onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: false}
            )}
                        scrollEventThrottle={16}>
                <View style={styles.homeContentWrapper}>
                    <Text style={[lucyStyle.lg, lucyStyle.bold]}>Category</Text>
                    <FeaturedCategory/>
                    <View style={[lucyStyle.container, lucyStyle.mt3]}>
                        <Text style={[lucyStyle.lg, lucyStyle.bold]}>Properties near you</Text>

                        <PropertyNearYou/>

                        <Text style={[lucyStyle.bold, lucyStyle.lg, lucyStyle.mt3, lucyStyle.ml2, lucyStyle.mr2]}>Featured
                            Properties</Text>

                        <View style={[lucyStyle.mt3]}>
                            <ImagedCard/>
                        </View>

                        <View style={[lucyStyle.mt3]}>
                            <ImagedCard/>
                        </View>

                        <View style={[lucyStyle.mt3]}>
                            <ImagedCard/>
                        </View>

                        <View style={[lucyStyle.mt3]}>
                            <ImagedCard/>
                        </View>

                        <View style={[lucyStyle.mt3]}>
                            <ImagedCard/>
                        </View>

                        <ImagedCard/>

                    </View>
                </View>
            </ScrollView>
        </View>
        </GestureHandlerRootView>
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

