import React from 'react';
import {Image, StyleSheet, View, ViewToken, Text} from 'react-native';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import {lucyStyle} from "../styles";
import {ImagedCard} from "./Card";

type ListItemProps = {
    viewableItems: Animated.SharedValue<ViewToken[]>;
    item: {
        id: number;
    };
};

const PropertyListItem: React.FC<ListItemProps> = React.memo(
    ({ item, viewableItems }) => {
        const rStyle = useAnimatedStyle(() => {
            const isVisible = Boolean(
                viewableItems.value
                    .filter((item) => item.isViewable)
                    .find((viewableItem) => viewableItem.item.id === item.id)
            );

            return {
                opacity: withTiming(isVisible ? 1 : 0),
                transform: [
                    {
                        scale: withTiming(isVisible ? 1 : 0.6),
                    },
                ],
            };
        }, []);

        return (
            <Animated.View
                style={[
                    {

                        width: '90%',
                        backgroundColor: '#ddd',
                        alignSelf: 'center',
                        borderRadius: 15,
                        marginTop: 20,
                        flexDirection: 'row',
                        gap: 20
                    },
                    rStyle,
                ]}
            >
                <ImagedCard/>
                {/*<Image style={{height: '100%', width: 100, borderRadius:15}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66I-dkl9973ONA3BBQjqAtuSyhIOFmO7TSSXNmbotuRY7lGso71acDclhLo5NekrsHQE&usqp=CAU'}}/>*/}
                {/*<View style={[lucyStyle.pt1, lucyStyle.pb1]}>*/}
                {/*<Text style={[lucyStyle.md]}>Lagankkhel ko ghar</Text>*/}
                {/*    <Text style={[lucyStyle.sm]}>Lagankhel</Text>*/}
                {/*</View>*/}
            </Animated.View>
        );
    }
);

const styles = StyleSheet.create({
    container: {},
});

export { PropertyListItem };
