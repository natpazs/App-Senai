import { ScrollView,StyleSheet, View, Image} from 'react-native';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Scanner() {
    return (
        <>
            <Nav color="#FF0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} texto = "Descrição do item" cor="#FFFFFF" icone2={<Ionicons name="reload" size={24} color="white" />}></Nav>
            <ScrollView style={{flex: 1} }>
                <View style={styles.container}>
                    <Image style={styles.qrCode} source={require('../assets/qrCode.png')} />
                </View>
            </ScrollView>
            <Footer borda="#CBCBCB" cor="#ffffff" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icone2={<FontAwesome5 name="list-ol" size={24} color="#595959"/>}></Footer>
        </>
      );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: 525,
        backgroundColor: "#F5F5F5",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    qrCode: {
        marginBottom: 40
    }
});