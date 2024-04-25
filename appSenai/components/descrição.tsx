import { StyleSheet, View, Text} from 'react-native';
import useColor from '../temas/Temas';


export default function Descrição({...props}) {

    const cores = useColor()

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            marginTop: 40,
            gap: 5,
            paddingLeft: 20
        },
        titulo: {
            fontSize: 11,
            fontWeight: "600",
            color: cores.inputTextColorPrimaryVariant 
        },
        texto: {
            fontSize: 16,
            fontWeight: "400",
            color: cores.inputTextColorPrimaryVariant
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
        </View>
      );
    };
