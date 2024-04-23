import { Stack } from 'expo-router/stack';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import useColor from '../../../../temas/Temas';

export default function layout() {

  const cores = useColor()

  return(
    <Stack>
        <Stack.Screen name="Inventario" options={{ headerTitle:"Lista", headerTitleAlign: 'center', headerTintColor: cores.inputTextColorPrimaryVariant,
        headerStyle: {backgroundColor: cores.bgPrimary},
            headerLeft: () => (<DrawerToggleButton tintColor={cores.inputTextColorPrimaryVariant} />
            ),
            headerSearchBarOptions:{
              headerIconColor:cores.inputTextColorPrimaryVariant
            }
        }} />
        <Stack.Screen name="CadastroItem" options={{headerTitle:"Cadastro de Itens", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<TouchableOpacity><AntDesign name="pluscircleo" size={24} color="white" /></TouchableOpacity>)
        }}/>
        <Stack.Screen name="DescItens" options={{headerTitle:"Descrição do Item", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<TouchableOpacity><MaterialIcons name="refresh" size={30} color="white"/></TouchableOpacity>)
        }}/>
        <Stack.Screen name="Editar" options={{headerTitle:"Editar", headerTitleAlign: 'center', headerTintColor:'#FFFFFF',
          headerStyle: {backgroundColor: "#FF0000"},       
          headerRight: () => (<TouchableOpacity><AntDesign name="checkcircle" size={24} color="white" /></TouchableOpacity>)
        }}/>
    </Stack>
  ) 
}