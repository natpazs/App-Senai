import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Item from '@comp/item';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import useColor from '../../../../temas/Temas';

export default function Inventario() {

    const cores = useColor()

    return (
        <>
            <ScrollView style={{flex: 1, backgroundColor: cores.bgPrimary}}>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
                <Item link="/TabNav/DrawerNav/Home/DescItens" titulo="956389" texto="CADEIRA  SENAI"></Item>
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

