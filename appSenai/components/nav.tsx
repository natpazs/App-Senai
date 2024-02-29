import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';


export default function Nav({...props}) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
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
            borderBottomWidth: 1,
            borderBottomColor: "#f5f5f5",
            gap: 10,
            marginTop: 30,
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20
        },
    })