import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';
import Btn from '../components/btn';


export default function Cadastro() {
    return (
        <View>
            <Header cor="#FF0000" texto="Cadastre-se" ></Header>
            <Input label="Nome:" placeholder="Inisra seu nome:"></Input>
            <Input label="Sobrenome:" placeholder="Inisra seu sobrenome:"></Input>
            <Input label="Email:" placeholder="Inisra seu email:"></Input>
            <Input label="Telefone:" placeholder="Inisra seu telefone:"></Input>
            <Input label="Senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Input label="Confirmar senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Btn texto="Cadastre-se" href="/index"></Btn>
        </View>
      );
};
