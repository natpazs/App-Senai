import { ScrollView} from 'react-native';
import Item from '@comp/item';
import Footer from '@comp/footer';
import Botao from '@comp/botao';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
            <Botao icn={<Ionicons name="add-circle" size={60} color="#ff0000" />}></Botao>
        </>
      );
};

