import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {lucyStyle} from "../styles";
import Pills from "./Pills";
import Avatar from "./Avatar";
import React from "react";
import {useGetPropertyTypesQuery} from "../features/property/propertyServices";

export default function (){

    const {data} = useGetPropertyTypesQuery();

    return (
        <ScrollView horizontal={true}>
            {
                data &&

                <View style={[lucyStyle.mt3, {flexDirection:'row', gap:15 }]}>
                    {
                        data?.data?.map(cat => (
                            <TouchableOpacity style={[]} key={cat.id}>
                                <Pills backgroundColor={'#D3DCFF'}>
                                    <View style={[lucyStyle.flexRow, {alignItems: 'center'}]}>
                                        <Avatar size={32} url={cat.image_url?.url}/>
                                        <Text style={{color: '#222', padding: 5}}>{cat.type}</Text>
                                    </View>
                                </Pills>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }

        </ScrollView>
    )
}
