import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

type InputType = {
    label: string;
    placeholder: string;
    iconName?: string;
    error?: string;
    password?: boolean;
    onFocus?: () => void;
    onChangeText?: () => any;
    keyboardType?: string;
    prependIconName?:string;
}

const Input = ({
                   label,
                   placeholder,
                   iconName,
                   error,
                   password,
                   onFocus = () => {
                   },
                   onChangeText, keyboardType='default',
                    prependIconName,
                   ...props
               }: InputType) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{marginBottom: 20}}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[
                    style.inputContainer,
                    {
                        borderColor: error
                            ? 'red'
                            : isFocused
                                ? 'blue'
                                : '#FFF',
                        alignItems: 'center',
                    },
                ]}>
                {
                    prependIconName &&
                    <Ionicons
                        name={prependIconName}
                        style={{color: 'blue', fontSize: 22, marginRight: 10}}
                    />
                }

                <TextInput
                    placeholder={placeholder}
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={hidePassword}
                    style={{color: 'blue', flex: 1}}
                    {...props}
                />
                {password && (
                    // <Text>*</Text>
                    <TouchableOpacity
                        onPress={() => setHidePassword(!hidePassword)}

                    >
                        <Ionicons name={hidePassword ? 'eye-outline' : 'eye-off-outline'} style={[{color: 'blue', fontSize: 22}]}/>
                    </TouchableOpacity>
                )}
            </View>
            {error && (
                <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
});

export default Input;
