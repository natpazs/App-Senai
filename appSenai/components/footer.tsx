import { StyleSheet, View, TouchableOpacity} from 'react-native';

export default function Footer({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.cor}]}>
            <TouchableOpacity >{props.icone}</TouchableOpacity>
            <TouchableOpacity >{props.icone2}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingLeft: 20,
            paddingRight: 20,
        },

    })