import {Button, Pressable, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Colors} from "../styles";
import React, {useEffect, useState} from "react";

type ButtonType = {
    color: string;
    text: string;
    onPress: any;
}

export default function ButtonComponent({color, text='', onPress}: ButtonType){
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
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        {/*<Button title={text} color={currentColor}/>*/}
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.primary.brand,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
