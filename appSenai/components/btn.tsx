import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinkProps } from 'expo-router/build/link/Link';
import { Link } from 'expo-router/build/link/Link';
import useColor from '../temas/Temas';

interface LinkBtnProps extends LinkProps{
  texto: string
}

export default function Btn({texto, ...props}:LinkBtnProps){

  const cores = useColor()

  const styles = StyleSheet.create({
    btn: {
      backgroundColor: cores.tema === 'dark' ? cores.bgSecundary: '#000000',
      width: 360,
      height: 47,
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
    },
    texto: {
      color : "#FFFFFF",
      fontSize: 14,
    }
  });

    return(
      <Link {...props} asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
      </Link>
    )
};


  