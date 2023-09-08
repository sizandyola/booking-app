import {Animated, View, StyleSheet} from "react-native";
import Image = Animated.Image;

export default function Avatar({size = 58}){
    return (
        <View>
            <Image source={{
                uri: 'https://t4.ftcdn.net/jpg/04/48/70/33/360_F_448703360_Yl1j5l882016Uzmo52mqGx2eu9h07Apt.jpg',
                width: size,
                height: size
            }}
                   borderRadius={size/2}
            />
        </View>
    )
}

