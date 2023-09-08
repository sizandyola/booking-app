import {Button} from "react-native";
import {Colors} from "../styles";
import {useEffect, useState} from "react";


export default function ButtonComponent({color, text=''}){
    const [currentColor, setCurrentColor] = useState('');


    useEffect(()=>{
        switch (color){
            case 'primary':
                setCurrentColor(Colors.primary.brand)
                break;
            case 'secondary':
                setCurrentColor(Colors.secondary.brand)
                break;
            case 'accent':
                setCurrentColor(Colors.accent.brand)
                break;
            default:
                setCurrentColor('#ccc')

        }
    },[color])



    return (
        <Button title={text} color={currentColor}/>
    )
}
