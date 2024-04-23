import { useColorScheme } from "react-native"


export interface Cores {
    bgPrimary: string,
    bgSecundary: string,
    bgInfo?: string
    textColorPrimary: string
    textColorSecundary: string
    //----------------------Input----------
    inputBgPrimaryVariant: string
    inputTextColorPrimaryVariant: string
    inputBgHover: string
    tema?: string

}

const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textColorPrimary: "#101010",
    textColorSecundary: "#FFFFFF",
    inputBgPrimaryVariant: "#F5F5F5",
    inputTextColorPrimaryVariant: "#595959",
    inputBgHover: "#F39200"
}
const dark: Cores = {
    bgPrimary:"#240707",
    bgSecundary: "#FF0000",
    textColorPrimary: "#FFFFFF",
    textColorSecundary: "#D9D9D9",
    inputBgPrimaryVariant: "#3A2828",
    inputTextColorPrimaryVariant: "#CBCBCB",
    inputBgHover: "#F39200",
}

export default function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme === 'dark'){
        dark.tema = "dark"
        return dark
    }
    else{
        light.tema = "light"
        return light
    }
}