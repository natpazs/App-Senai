import { StyleSheet, Text, View, Image,TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';
import { Cores } from '../temas/Temas';

interface InputProps extends TextInputProps{
    label: string,
    cor: Cores
}

export default function Input({label, ...props}:InputProps) {
    const [hover, setHover] = useState(props.cor.inputBgPrimaryVariant)


    const styles = StyleSheet.create({
        container: {
            marginLeft: 25,
            marginRight: 25,
            marginTop: 20,
        },
        text: {
            fontSize: 14,
            marginBottom: 10,
            color: props.cor.textColorPrimary
        },
        input: {
            width: "100%",
            padding: 10,
            fontSize: 11,
            height: 40,
            backgroundColor: props.cor.inputBgPrimaryVariant,
            borderColor: hover,
            borderWidth: 1,
            borderRadius:5
        }

    });
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{label}</Text>
                <TextInput {...props} style={styles.input} placeholderTextColor={props.cor.inputTextColorPrimaryVariant} onFocus={()=>{
                    setHover(props.cor.inputBgHover)
                }} onBlur={()=>{
                    setHover(props.cor.inputBgPrimaryVariant)
                }}/>
            </View>
    )
};
