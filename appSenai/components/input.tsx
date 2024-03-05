import { StyleSheet, Text, View, Image,TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    label: string,
}

export default function Input({label, ...props}:InputProps) {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{label}</Text>
                <TextInput {...props} style={styles.input}/>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 25,
        marginTop: 20,
    },
    text: {
        fontSize: 14,
        marginBottom: 10
    },
    input: {
        padding: 10,
        marginRight: 25,
        fontSize: 11,
        height: 40,
        backgroundColor: "#F5F5F5"
    }

  });