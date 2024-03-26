import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

export default function Layout(){
    return <Tabs screenOptions={{
        headerTitleAlign:"center",
        headerTintColor: "white",
        headerTitle: "",
        headerStyle: {
            backgroundColor: '#FF0000'
        },
        headerLeft: () => (
            <DrawerToggleButton />
        ),
        headerRight: () => (
            ScreenStackHeaderSearchBarView({
                placeholder: "Pesquisar"
            })
        )
    }}>
    </Tabs>
}