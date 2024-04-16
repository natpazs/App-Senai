import { StyleSheet, Text, View } from 'react-native';
import Header from '@comp/header';
import Input from '@comp/input';
import Btn from '@comp/btn';
import { useColor } from '../../temas/Temas';


export default function Cadastro() {

    const cores = useColor()

    return (
        <View>
            <Header cor={cores.bgSecundary} texto="Cadastre-se" ></Header>
            <Input label="Nome:" placeholder="Inisra seu nome:"></Input>
            <Input label="Sobrenome:" placeholder="Inisra seu sobrenome:"></Input>
            <Input label="Email:" placeholder="Inisra seu email:"></Input>
            <Input label="Telefone:" placeholder="Inisra seu telefone:"></Input>
            <Input label="Senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Input label="Confirmar senha:" placeholder="Inisra sua senha:" secureTextEntry={true}></Input>
            <Btn texto="Cadastre-se" href="/TabNav"></Btn>
        </View>
      );
};
