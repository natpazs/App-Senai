import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';
import Btn from '../components/btn';


export default function Login() {
    return (
        <View>
            <Header cor="#000000" texto="Login" ></Header>
            <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
            <Input label="Email:" placeholder="Inisra seu email:" ></Input>
            <Input label="Senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Btn texto="Fazer login"></Btn>
            <View style={styles.linksContainer}>
                <TouchableOpacity><Text style={styles.link}>Cadastre-se</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.link}>Esqueceu a senha?</Text></TouchableOpacity>
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