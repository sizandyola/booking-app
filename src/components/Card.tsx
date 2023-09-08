import React, {ReactNode} from "react";
import {View, Text, StyleSheet, Animated} from "react-native";
import Image = Animated.Image;
import {lucyStyle} from "../styles";


type CardProps = {
    children: ReactNode
}
export default function Card(props: CardProps): React.JSX.Element {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

export function ImagedCard(): React.JSX.Element {
    return (
        <View>
            <Card>
                <View style={styles.imageCardTextContainer}>
                    <Text style={[lucyStyle.lg]}>Cricket match</Text>
                    <Text style={[lucyStyle.xm]}>Tudhikhel, Kathmandu</Text>
                    <View style={[lucyStyle.flexRow, lucyStyle.justifyBetween, lucyStyle.mt5]}>
                        <View>
                            <Text style={[]}>Date</Text>
                            <Text>Tomorrow</Text>
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
                    uri: 'https://t4.ftcdn.net/jpg/04/48/70/33/360_F_448703360_Yl1j5l882016Uzmo52mqGx2eu9h07Apt.jpg'
                }}
                style={styles.cardImage}
            />
        </View>
    )
}

export function HorizontalImageCard() {
    return (
        <View>
            <Card>
                <Image
                    borderRadius={8}
                    source={{
                        uri: 'https://t4.ftcdn.net/jpg/04/48/70/33/360_F_448703360_Yl1j5l882016Uzmo52mqGx2eu9h07Apt.jpg'
                    }}
                    style={styles.horizontalCardImage}
                />
                <View style={[lucyStyle.mt3]}>
                    <Text style={lucyStyle.lg}>Cricket match</Text>
                    <Text style={[lucyStyle.xm]}>Tudhikhel, Kathmandu</Text>
                </View>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        height: 140,
        width: 120,
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
    horizontalCardContent:{

    }
})
