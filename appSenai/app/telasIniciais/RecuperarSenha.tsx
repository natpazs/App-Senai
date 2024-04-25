import { StyleSheet, Text, View } from 'react-native';
import Header from '@comp/header';
import Input from '@comp/input';
import Btn from '@comp/btn';
import useColor from '../../temas/Temas';

export default function RecuperarSenha() {

    const cores = useColor()

    const styles = StyleSheet.create({
        texto: {
            fontSize: 16,
            alignSelf: "center",
            marginTop: 50,
            fontWeight: "500",
            textAlign: "center",
            width: 230,
            color: cores.textColorPrimary
        },
    });

    return (
        <View style={{backgroundColor: cores.bgPrimary, height:"100%"}}>
            <Header cor={cores.tema === "dark" ? cores.bgPrimary:"#011E83"}  texto="Recuperação de senha" ></Header>
            <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
            <Input label="Email:" placeholder="Insira seu email:" cor={cores}></Input>
            <Btn texto="Recuperar senha" href="TelasIniciais/Login" ></Btn>
        </View>
      );
};
