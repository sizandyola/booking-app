import {View, Text} from 'react-native'
import {ReactNode} from "react";


type PillsProps = {
    children: ReactNode,
    backgroundColor:string,
}

export default function Pills(props: PillsProps){
    return (
        <View style={{backgroundColor: props.backgroundColor, borderRadius: 25, padding: 10 }}>
            {props.children}
        </View>
    )
}
