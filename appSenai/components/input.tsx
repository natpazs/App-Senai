import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Input({nome, texto}) {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{nome}</Text>
                <TextInput style={styles.input} placeholder={texto}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 25,
        marginTop: 50,
    },
    text: {
        fontSize: 16,
        marginBottom: 10
    },
    input: {
        padding: 10,
        marginRight: 25,
        backgroundColor: "#F5F5F5"
    }

  });