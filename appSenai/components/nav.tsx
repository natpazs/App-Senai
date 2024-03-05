import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function Nav({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <StatusBar style="dark"/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
            <Text style={styles.texto}>{props.texto}</Text>
            <TouchableOpacity>{props.icone2}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 30,
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20
        },
        texto: {
            fontSize: 14,
            color: "#595959"
        }
    });