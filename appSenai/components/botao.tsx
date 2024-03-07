import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Botao({...props}){
    return(
        <TouchableOpacity style={styles.icn}>
            {props.icn}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    icn: {
        position: "absolute",
        bottom: 80,
        right: 20,
        zIndex: 1
    },
});