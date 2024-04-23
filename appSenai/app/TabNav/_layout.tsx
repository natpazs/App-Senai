import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import useColor from "../../temas/Temas";

export default function layout() {

    const cores = useColor()

    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false
        }}>
            <Tabs.Screen name="Scanner" options={{
                headerRight: () => (<TouchableOpacity><MaterialIcons name="refresh" size={30} color="white" style={{marginRight:20}} /></TouchableOpacity>),
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="camera-reverse" size={size} color={color}/>
                ),
                headerTintColor: "#FFFFFF",
                headerStyle: {backgroundColor:cores.bgSecundary},
                tabBarStyle: {backgroundColor: cores.bgPrimary}
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: cores.bgSecundary
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-numbered" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: "#ffffff",
            }}/>
        </Tabs>
    )
}