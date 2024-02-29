import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Inventario() {
    return (
        <View>
            <Nav icone={<Entypo name="menu" size={30} color="#595959" />} icone2={<EvilIcons name="search" size={30} color="#595959" />}></Nav>
            <Footer cor="#FF0000" icone={<Entypo name="menu" size={30} color="white" />} icone2={<EvilIcons name="search" size={30} color="white" />} ></Footer>
        </View>
      );
};