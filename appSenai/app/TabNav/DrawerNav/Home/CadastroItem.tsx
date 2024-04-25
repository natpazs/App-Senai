import { ScrollView, View} from 'react-native';
import Nav from '@comp/nav';
import Formulario from '@comp/formulario';
import Footer from '@comp/footer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import useColor from '../../../../temas/Temas';

export default function CadastroItem() {

    const cores = useColor()

    return (
        <>
            <ScrollView style={{flex: 1, backgroundColor:cores.bgPrimary}}>
                <Formulario cor={cores} label='Nº Inventário' ></Formulario>
                <Formulario cor={cores} label='Descrição'></Formulario>
                <Formulario cor={cores} label='Local'></Formulario>
                <Formulario cor={cores} label='Responsável'></Formulario>
                <Formulario cor={cores} label='Data de registro'></Formulario>
            </ScrollView>
        </>
      );
};