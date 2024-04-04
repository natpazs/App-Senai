import { Stack } from 'expo-router/stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function layout() {
  return(
    <Stack>
        <Stack.Screen name="Inventario" options={{
            headerLeft: () => (<DrawerToggleButton/>
            ),
            headerSearchBarOptions:{
                placeholder: "Pesquisar"
            }

        }} />
    </Stack>  
  ) 
}