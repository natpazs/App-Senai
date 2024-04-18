import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function layout() {
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false
        }}>
            <Tabs.Screen name="Scanner" options={{
                headerRight: () => (<MaterialIcons name="refresh" size={30} color="white" style={{marginRight:20}} />),
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="camera-reverse" size={size} color={color}/>
                ),
                headerTintColor: "#FFFFFF",
                headerStyle: {backgroundColor: "#FF0000"},
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor:"#ff0000"
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="format-list-numbered" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: "#ffffff",
            }}/>

        </Tabs>
    )
}