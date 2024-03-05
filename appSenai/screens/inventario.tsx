import { ScrollView, View} from 'react-native';
import Nav from '../components/nav';
import Item from '../components/item';
import Footer from '../components/footer';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Inventario() {
    return (
        <>
            <Nav color="#ffffff" icone={<Entypo name="menu" size={30} color="#595959" />} texto = "Lista" icone2={<EvilIcons name="search" size={30} color="#595959" />}></Nav>
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
            <Footer cor="#FF0000" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="white" />} icone2={<FontAwesome5 name="list-ol" size={24} color="white" />} ></Footer>
        </>
      );
};