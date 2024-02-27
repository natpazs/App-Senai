import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';
import Btn from '../components/btn';


export default function Cadastro() {
    return (
        <View>
            <Header cor="#FF0000" texto="Cadastre-se" ></Header>
            <Input nome="Nome:" texto="Inisra seu nome:"></Input>
            <Input nome="Sobrenome:" texto="Inisra seu sobrenome:"></Input>
            <Input nome="Email:" texto="Inisra seu email:"></Input>
            <Input nome="Telefone:" texto="Inisra seu telefone:"></Input>
            <Input nome="Senha:" texto="Inisra sua senha:"></Input>
            <Input nome="Confirmar senha:" texto="Inisra sua senha:"></Input>
            <Btn texto="Cadastre-se"></Btn>
        </View>
      );
};
