import { ScrollView,StyleSheet, View, Image} from 'react-native';
import Footer from '../../../components/footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Scanner() {
    return (
        <>
            <ScrollView style={{flex: 1} }>
                <View style={styles.container}>
                    <Image style={styles.qrCode} source={require('../../../assets/qrCode.png')} />
                </View>
            </ScrollView>
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