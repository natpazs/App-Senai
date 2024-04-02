import { StyleSheet, Text, View, Image, } from 'react-native';

type headerProps ={
    cor: string,
    texto: string
}


export default function Header({cor, texto}:headerProps) {
    return (
        <View style={[styles.container, { backgroundColor: cor }]}>
            <Image style={styles.logo} source={require('@assets/logo.png')} />
            <Text style={styles.text}>{texto}</Text>
        </View>
      );
    };


const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    logo: {
        marginTop: 20,
    },
   
    text: {
        fontSize: 20,
        marginTop: 10,
        color : "#FFFFFF",
    }

});
    
