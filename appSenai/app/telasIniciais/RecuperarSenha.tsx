import { StyleSheet, Text, View } from 'react-native';
import Header from '@comp/header';
import Input from '@comp/input';
import Btn from '@comp/btn';


export default function RecuperarSenha() {
    return (
        <View>
            <Header cor="#011E83" texto="Recuperação de senha" ></Header>
            <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
            <Input label="Email:" placeholder="Inisra seu email:"></Input>
            <Btn texto="Recuperar senha" href="/index"></Btn>
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