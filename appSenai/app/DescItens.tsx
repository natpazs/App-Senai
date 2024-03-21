import { ScrollView,StyleSheet, View} from 'react-native';
import Nav from '../components/nav';
import Descrição from '../components/descrição';
import Footer from '../components/footer';
import Botao from '../components/botao';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function DescItens() {
    return (
        <>
            <Nav color="#FF0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} texto = "Descrição do item" cor="#FFFFFF" icone2={<Ionicons name="reload" size={24} color="white" />}></Nav>
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
            <Footer borda="#CBCBCB" cor="#ffffff" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icone2={<FontAwesome5 name="list-ol" size={24} color="#595959"/>}></Footer>
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