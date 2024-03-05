import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';


export default function Item({...props}) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 66,
            gap: 10,
            paddingLeft: 20,
            borderColor: "#F5F5F5",
            borderWidth: 1
        },
        titulo:{
            marginTop: 5,
            fontSize: 16,
            fontWeight: "600"
        },
        texto: {
            fontSize: 14,
            fontWeight: "400",
            color: "#595959"
        }
    });