import { Stack } from 'expo-router/stack';
import useColor from '../temas/Temas';


export default function Layout() {

  const cores = useColor()
  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false, statusBarColor: cores.tema === 'dark' ? cores.bgPrimary: '#000000' }}/>
      <Stack.Screen name='TelasIniciais/Login' options={{headerShown: false, statusBarColor: cores.tema === 'dark' ? cores.bgPrimary: '#000000' }}/>
      <Stack.Screen name='TelasIniciais/Cadastro' options={{headerTitle:"", headerTransparent: true, headerTintColor: "#ffffff", statusBarColor:cores.tema === 'dark' ? cores.bgPrimary: '#FF0000'}}/>
      <Stack.Screen name='TelasIniciais/RecuperarSenha' options={{headerTitle:"", headerTransparent: true, headerTintColor: "#ffffff", statusBarColor: cores.tema === 'light' ? cores.bgInfo: '#240707'}}/>
      <Stack.Screen name='drawer' options={{headerShown: false}}/>
      <Stack.Screen name="TabNav" options={{headerShown: false, statusBarTranslucent:true}}/>
    </Stack>
   
  ) 
}