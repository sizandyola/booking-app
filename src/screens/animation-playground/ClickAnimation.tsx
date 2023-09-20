import Animated, {useSharedValue, withSpring} from "react-native-reanimated";
import {View} from "react-native";
import ButtonComponent from "../../components/Buttons";
import {lucyStyle} from "../../styles";

export default function ClickAnimation(){
    const width = useSharedValue(100);


    const handlePress = (value?:any)=>{
        if(value){
            width.value = withSpring( width.value - 50);
        }else{
            width.value = withSpring( width.value + 50);
        }

    }

    return (
        <View style={[lucyStyle.mt5, lucyStyle.mb3, {flex:1 , alignItems:'center', borderRadius: 5}]}>
            <Animated.View style={[
                {
                    width: width, height: 100, backgroundColor: 'violet', borderRadius: 15
                },
                lucyStyle.mb3
            ]}>

            </Animated.View>
            <View style={[lucyStyle.flexRow, {gap: 15}]}>


            <ButtonComponent color={'primary'} text={'Increase'} onPress={()=>handlePress()}/>
            <ButtonComponent color={'primary'} text={'Descrease'} onPress={()=>handlePress('decrease')}/>
            </View>
        </View>
    )
}
