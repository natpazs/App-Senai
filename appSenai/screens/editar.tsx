import { ScrollView, View} from 'react-native';
import Nav from '../components/nav';
import Formulario from '../components/formulario';
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Editar() {
    return (
        <>
            <Nav color="#FF0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} texto = "Editar" cor="#FFFFFF" icone2={<AntDesign name="checkcircle" size={24} color="white" />}></Nav>
            <ScrollView style={{flex: 1}}>
                <Formulario label='Nº Inventário' ></Formulario>
                <Formulario label='Descrição'></Formulario>
                <Formulario label='Local'></Formulario>
                <Formulario label='Responsável'></Formulario>
                <Formulario label='Data de registro'></Formulario>
            </ScrollView>
            <Footer borda="#CBCBCB" cor="#ffffff" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icone2={<FontAwesome5 name="list-ol" size={24} color="#595959"/>}></Footer>
        </>
      );
};