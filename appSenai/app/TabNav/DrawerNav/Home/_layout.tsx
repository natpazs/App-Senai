import { Stack } from 'expo-router/stack';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function layout() {
  return(
    <Stack>
        <Stack.Screen name="Inventario" options={{ headerTitle:"Lista", headerTitleAlign: 'center',
            headerLeft: () => (<DrawerToggleButton/>
            ),
            headerSearchBarOptions:{
                placeholder: "Pesquisar"
            }
        }} />
        <Stack.Screen name="CadastroItem" options={{headerTitle:"Cadastro de Itens", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<AntDesign name="pluscircleo" size={24} color="white" />)
        }}/>
        <Stack.Screen name="DescItens" options={{headerTitle:"Descrição do Item", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<MaterialIcons name="refresh" size={30} color="white"/>)
        }}/>
        <Stack.Screen name="Editar" options={{headerTitle:"Editar", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<AntDesign name="checkcircle" size={24} color="white" />)
        }}/>
    </Stack>
  ) 
}