import { ScrollView } from 'react-native';
import Header from '@comp/header';
import Input from '@comp/input';
import Btn from '@comp/btn';
import useColor  from '../../temas/Temas';


export default function Cadastro() {

    const cores = useColor()

    return (
        <ScrollView style={{backgroundColor: cores.bgPrimary, height:"100%"}}>
            <Header cor={cores.tema === 'dark' ? cores.bgPrimary: '#FF0000'} texto="Cadastre-se" ></Header>
            <Input label="Nome:" placeholder="Insira seu nome:"  cor={cores}></Input>
            <Input label="Sobrenome:" placeholder="Insira seu sobrenome:"  cor={cores}></Input>
            <Input label="Email:" placeholder="Insira seu email:"  cor={cores}></Input>
            <Input label="Telefone:" placeholder="Insira seu telefone:"  cor={cores}></Input>
            <Input label="Senha:" placeholder="Insira sua senha:" secureTextEntry={true}  cor={cores}></Input>
            <Input label="Confirmar senha:" placeholder="Insira sua senha:" secureTextEntry={true}  cor={cores}></Input>
            <Btn texto="Cadastre-se" href="/TabNav"></Btn>
        </ScrollView>
      );
};
