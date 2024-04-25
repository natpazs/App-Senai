import { ScrollView} from 'react-native';
import Formulario from '@comp/formulario';
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