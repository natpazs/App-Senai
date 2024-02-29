import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

type btnProps={
  texto: string
}
export default function Btn({texto}:btnProps){
    return(
        <TouchableOpacity style={styles.btn}><Text style={styles.texto}>{texto}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
      backgroundColor: "#000",
      width: 360,
      height: 47,
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
    },
    texto: {
      color : "#FFFFFF",
      fontSize: 14,
    }
  });
  