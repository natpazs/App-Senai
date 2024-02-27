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