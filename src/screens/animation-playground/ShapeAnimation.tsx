import {Text, View, StyleSheet} from "react-native"
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming} from "react-native-reanimated";
import {useEffect} from "react";

const SIZE = 100.0;
export default function ShapeAnimation(){

    const progress = useSharedValue(1);
    const scale = useSharedValue(2)

    const handleRotation = ()=>{
        'worklet';
        return `${progress.value * 2 * Math.PI}rad`
    }

    const reanimatedStyle = useAnimatedStyle(()=>{
        return {
            opacity: progress.value,
            borderRadius: progress.value * SIZE / 2,
            transform: [{scale: scale.value}, {rotate: handleRotation()}]
        }
    })

    useEffect(()=>{
        progress.value = withRepeat( withSpring ( 0.5), -1,true);
        scale.value = withRepeat( withSpring (1), -1, true);
    },[])

    return (
        <>
            <View style={styles.container}>
            <Animated.View style={[{height: SIZE, width: SIZE, backgroundColor: 'blue'},
            reanimatedStyle
            ]}>

            </Animated.View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
