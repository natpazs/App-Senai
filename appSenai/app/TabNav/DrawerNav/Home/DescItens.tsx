import { ScrollView,StyleSheet, View, TouchableOpacity} from 'react-native';
import Nav from '@comp/nav';
import Descrição from '@comp/descrição';
import Footer from '@comp/footer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';


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
            <Link href="Home/Editar" asChild>
                <TouchableOpacity style={styles.icn}>
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="#ff0000" />
                </TouchableOpacity>
            </Link>
            
        </>
      );
};

const styles = StyleSheet.create({
    icn: {
        position: "absolute",
        bottom: 80,
        right: 20,
        zIndex: 1
    },
    container: {
        width:"100%",
        height: 525,
        backgroundColor: "#F5F5F5"
    }
});