import { ScrollView, View} from 'react-native';
import Nav from '@comp/nav';
import Formulario from '@comp/formulario';
import Footer from '@comp/footer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CadastroItem() {
    return (
        <>
            <ScrollView style={{flex: 1, backgroundColor:'#FFFFFF'}}>
                <Formulario label='Nº Inventário' ></Formulario>
                <Formulario label='Descrição'></Formulario>
                <Formulario label='Local'></Formulario>
                <Formulario label='Responsável'></Formulario>
                <Formulario label='Data de registro'></Formulario>
            </ScrollView>
        </>
      );
};