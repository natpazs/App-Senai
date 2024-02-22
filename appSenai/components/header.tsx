import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';


export default function Header({cor, texto}) {
    return (
        <View style={[styles.container, { backgroundColor: cor }]}>
            <StatusBar style="light"/>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
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
        marginTop: 30,
    },
   
    text: {
        fontSize: 20,
        marginTop: 15,
        color : "#FFFFFF",
    }

});
    
