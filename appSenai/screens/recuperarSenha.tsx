import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';


export default function RecuperarSenha() {
    return (
        <View>
            <Header cor="#011E83" texto="Recuperação de senha" ></Header>
            <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
            <Input nome="Email" texto="Inisra seu email:"></Input>
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