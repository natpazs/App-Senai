import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Header from '@comp/header';
import Input from '@comp/input';
import Btn from '@comp/btn';
import { useColor } from '../../temas/Temas';


export default function Login() {

    const cores = useColor()

    return (
        <View>
            <Header cor="#000000"texto="Login" ></Header>
            <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
            <Input label="Email:" placeholder="Inisra seu email:" ></Input>
            <Input label="Senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Btn texto="Entrar" href="TabNav"></Btn>
            <View style={styles.linksContainer}>
                <Link href="TelasIniciais/Cadastro" asChild>
                    <TouchableOpacity><Text style={styles.link}>Cadastre-se</Text></TouchableOpacity>
                </Link>
                <Link href="TelasIniciais/RecuperarSenha" asChild>
                    <TouchableOpacity><Text style={styles.link}>Esqueceu a senha?</Text></TouchableOpacity>
                </Link>
            </View>
        </View>
      );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 16,
        alignSelf: "center",
        marginTop: 50,
        fontWeight: "500",
        textAlign: "center",
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25
    },
    link: {
        marginTop: 15,
        color: "#011E83",
        fontSize: 15,
      },
});