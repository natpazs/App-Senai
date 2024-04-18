import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Item from '@comp/item';
import Footer from '@comp/footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Inventario() {
    return (
        <>
            <ScrollView style={{flex: 1}}>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item titulo="956389" texto="CADEIRA  SENAI"></Item>
            </ScrollView>
            <Link href="/TabNav/DrawerNav/Home/CadastroItem" asChild>
                <TouchableOpacity style={styles.icn}>
                    <Ionicons name="add-circle" size={60} color="#ff0000"/>
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
});

