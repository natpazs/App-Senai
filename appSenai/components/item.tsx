import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import useColor from '../temas/Temas';

export default function Item({...props}) {

    const cores = useColor()


    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 66,
            gap: 10,
            paddingLeft: 20,
            borderColor: cores.inputBgPrimaryVariant,
            borderWidth: 1
        },
        titulo:{
            marginTop: 5,
            fontSize: 16,
            fontWeight: "600",
            color: cores.inputTextColorPrimaryVariant 
        },
        texto: {
            fontSize: 14,
            fontWeight: "400",
            color: cores.inputTextColorPrimaryVariant
        }
    });
    return (
        <Link href={props.link} asChild>
            <TouchableOpacity style={styles.container}>
                <StatusBar style="dark"/>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text style={styles.texto}>{props.texto}</Text>
            </TouchableOpacity>
        </Link>
      );
    };

