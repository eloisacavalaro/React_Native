import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HelloWorld() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.hello}>BEM-VINDOS</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Filmes')}
            >
                <Text>Ver lista de filmes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
});