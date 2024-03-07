import { StyleSheet, Text, View, Image,TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps{
    label: string,
}

export default function Input({label, ...props}:InputProps) {
    const [hover, setHover] = useState("#F5F5F5")

    const styles = StyleSheet.create({
        container: {
            marginLeft: 25,
            marginRight: 25,
            marginTop: 20,
        },
        text: {
            fontSize: 14,
            marginBottom: 10
        },
        input: {
            width: "100%",
            padding: 10,
            fontSize: 11,
            height: 40,
            backgroundColor: "#F5F5F5",
            borderColor: hover,
            borderWidth: 1,
            borderRadius:5
        }

    });
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{label}</Text>
                <TextInput {...props} style={styles.input} onFocus={()=>{
                    setHover("#f39200")
                }} onBlur={()=>{
                    setHover("#F5F5F5")
                }}/>
            </View>
    )
};
