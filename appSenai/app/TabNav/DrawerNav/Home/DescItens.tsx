import { ScrollView,StyleSheet, View, TouchableOpacity} from 'react-native';
import Descrição from '@comp/descrição';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import useColor from '../../../../temas/Temas';

export default function DescItens() {

    const cores = useColor()

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
            backgroundColor: cores.tema === 'dark'? cores.bgPrimary: '#FBFBFB'
        }
    });

    return (
        <>
            <ScrollView style={{flex: 1,backgroundColor:cores.bgPrimary}}>
                <View style={styles.container}>
                    <Descrição titulo ="Nº do Inventário:" texto="957689"></Descrição>
                    <Descrição titulo ="Descrição:" texto="CADEIRA GIRATÓRIOA"></Descrição>
                    <Descrição titulo ="Local:" texto="SALA C13"></Descrição>
                    <Descrição titulo ="Responsável:" texto="CARLOS"></Descrição>
                    <Descrição titulo ="Data de Registro:" texto="05/03/2024"></Descrição>
                </View>
            </ScrollView>
            <Link href="/TabNav/DrawerNav/Home/Editar" asChild>
                <TouchableOpacity style={styles.icn}>
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="#ff0000" />
                </TouchableOpacity>
            </Link>
            
        </>
      );
};
