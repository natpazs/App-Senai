import { Stack } from 'expo-router/stack';

export default function Layout() {
  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false, statusBarColor: "#000000"}}/>
      <Stack.Screen name='TelasIniciais/Login' options={{headerShown: false, statusBarColor: "#000000"}}/>
      <Stack.Screen name='TelasIniciais/Cadastro' options={{headerTitle:"", headerTransparent: true, headerTintColor: "#ffffff", statusBarColor: "#FF0000"}}/>
      <Stack.Screen name='TelasIniciais/RecuperarSenha' options={{headerTitle:"", headerTransparent: true, headerTintColor: "#ffffff", statusBarColor: "#011E83"}}/>
      <Stack.Screen name='drawer' options={{headerShown: false}}/>
      <Stack.Screen name="TabNav" options={{headerShown: false, statusBarTranslucent:true}}/>
    </Stack>
   
  ) 
}