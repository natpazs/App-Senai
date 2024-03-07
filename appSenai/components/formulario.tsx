import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native";
import { useState } from "react";

interface InputProps extends TextInputProps{
    label: string
}

export default function Formulario ({label, ...props}: InputProps){
    const [hover, setHover] = useState("#5d5c5c")

    const styles = StyleSheet.create({
      container:{
          paddingRight: 30,
          paddingLeft:30
      },
      container2:{
        height: 51,
        width: "100%",
        borderWidth: 1,
        borderColor: hover,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 50,
        paddingLeft: 20,
        position: "relative",
        zIndex: -1
      },
      text:{
        position: "absolute",
        marginTop: 40,
        marginStart: 10,
        paddingStart: 5,
        paddingEnd: 10,
        color: hover,
        backgroundColor: "#FFFFFF",
        zIndex: 1
      },
      asterisco:{
        color: "#ff0000"
      },
    })
      
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{label} <Text style={styles.asterisco}>*</Text></Text>
            </View>
                <TextInput {...props}  style={styles.container2} onFocus={()=>{
                    setHover("#f39200")
                }} onBlur={()=>{
                    setHover("#5d5c5c")
                }}/>
        </View>
    )

}
