import { ScrollView,StyleSheet, View} from 'react-native';
import Nav from '@comp/nav';
import Descrição from '@comp/descrição';
import Footer from '@comp/footer';
import Botao from '@comp/botao';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function DescItens() {
    return (
        <>
            <ScrollView style={{flex: 1} }>
                <View style={styles.container}>
                    <Descrição titulo ="Nº do Inventário:" texto="957689"></Descrição>
                    <Descrição titulo ="Descrição:" texto="CADEIRA GIRATÓRIOA"></Descrição>
                    <Descrição titulo ="Local:" texto="SALA C13"></Descrição>
                    <Descrição titulo ="Responsável:" texto="CARLOS"></Descrição>
                    <Descrição titulo ="Data de Registro:" texto="05/03/2024"></Descrição>
                </View>
            </ScrollView>
            <Botao icn={<MaterialCommunityIcons name="pencil-circle" size={60} color="#ff0000" />}/>
        </>
      );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: 525,
        backgroundColor: "#F5F5F5"
    }
});