import {Animated, View, StyleSheet} from "react-native";
import Image = Animated.Image;
import {useEffect} from "react";

export default function Avatar({size = 58, url = '/uploads/apartment_b7161e67e5.jpg'}) {

    useEffect(() => {
    }, [url])

    return (
        <View>
            <Image source={{
                uri: "http://192.168.86.47:1337" + url,
                width: size,
                height: size
            }}
                   borderRadius={size / 2}
            />
        </View>
    )
}

