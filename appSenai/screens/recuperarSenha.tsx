import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';
import Btn from '../components/btn';


export default function RecuperarSenha() {
    return (
        <View>
            <Header cor="#011E83" texto="Recuperação de senha" ></Header>
            <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
            <Input nome="Email:" texto="Inisra seu email:"></Input>
            <Btn texto="Recuperar senha"></Btn>
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
        width: 230
    },
});