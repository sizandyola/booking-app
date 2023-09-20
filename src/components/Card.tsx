import React, {ReactNode} from "react";
import {View, Text, StyleSheet, Animated, StyleProp, ViewStyle} from "react-native";
import Image = Animated.Image;
import {lucyStyle} from "../styles";


type CardProps = {
    children: ReactNode,
    style?: StyleProp<ViewStyle>
}
export default function Card(props: CardProps): React.JSX.Element {
    return (
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    )
}

export function ImagedCard(url = '/uploads/apartment_b7161e67e5.jpg'): React.JSX.Element {
    return (
        <View style={{width: '100%'}}>
            <Card>
                <View style={styles.imageCardTextContainer}>
                    <Text style={[lucyStyle.lg]}>Placeholder property</Text>
                    <Text style={[lucyStyle.xm]}>Basantapur, Kathmandu</Text>
                    <View style={[lucyStyle.flexRow, lucyStyle.justifyBetween, lucyStyle.mt5]}>
                        <View>
                            <Text style={[]}>Date</Text>
                            <Text>12/12/2023</Text>
                        </View>
                        <View>
                            <Text>Price</Text>
                            <Text>1200</Text>
                        </View>
                    </View>
                </View>
            </Card>
            <Image
                borderRadius={24}
                source={{
                    uri: "http://192.168.86.47:1337" + '/uploads/apartment_b7161e67e5.jpg',
                }}
                style={styles.cardImage}
            />
        </View>
    )
}

type horizontalImageCardProps = {
    width: number | string | any;
    height: number | string | any;
    style?: StyleProp<ViewStyle>
    children?: any;
    image: any;
}

export function HorizontalImageCard(props: horizontalImageCardProps) {
    return (
        <View>
            <Card>
                <Image
                    borderRadius={8}
                    source={{
                        uri: props.image ? props.image: 'https://t4.ftcdn.net/jpg/04/48/70/33/360_F_448703360_Yl1j5l882016Uzmo52mqGx2eu9h07Apt.jpg'
                    }}
                    style={[styles.horizontalCardImage, {width: props.width, height: props.height}]}
                />
                <View style={[lucyStyle.mt3]}>
                    {props.children}
                    {/*<Text style={lucyStyle.lg}>Cricket match</Text>*/}
                    {/*<Text style={[lucyStyle.xm]}>Tudhikhel, Kathmandu</Text>*/}
                </View>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#555',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardImage: {
        height: 120,
        width: 100,
        top: 0,
        left: 3,
        position: "absolute"
    },
    imageCardTextContainer: {
        paddingLeft: 110,
    },

    horizontalCardImage: {
        height: 140,
        width: 150,
        top: 0,
        left: 3,
    },
    horizontalCardContent: {}
})
