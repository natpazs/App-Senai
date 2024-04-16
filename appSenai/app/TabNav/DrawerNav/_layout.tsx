import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@comp/customDrawer"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function layout() {
    return(
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name="Home" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <Entypo name="home" size={size} color={color} />
            )}}/>
            <Drawer.Screen name="Perfil" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <Ionicons name="person" size={size} color={color} />
            )}}/>
            <Drawer.Screen name="Sobre" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <AntDesign name="exclamationcircle" size={size} color={color} />
            )}}/>
            <Drawer.Screen name="Suporte" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <Ionicons name="chatbox-ellipses" size={size} color={color} />
            )}}/>
            <Drawer.Screen name="Sair" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <MaterialCommunityIcons name="logout" size={size} color={color} />
            )}}/>
        </Drawer>
    )
}