import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function Nav({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <StatusBar style="light"/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
            <Text style={[styles.texto, {color: props.cor}]}>{props.texto}</Text>
            <TouchableOpacity>{props.icone2}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            paddingTop: 40,
            paddingBottom:20,
            paddingLeft: 20,
            paddingRight: 20,
            alignSelf: "center"
        },
        texto: {
            marginTop: 5,
            fontSize: 14,
            fontWeight: "600"
        }
    });