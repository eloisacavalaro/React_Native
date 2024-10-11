import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardFilme({ filme }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes do filme', { filme })}
            style={styles.filme}
        >
            <Image source={filme.image} style={styles.image} />
            <Text style={styles.nome}>{filme.nome}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filme: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    image: {
        height: 150,
        width: 100,
        marginRight: 15,
    },
    nome: {
        flex: 1,
        fontWeight: 'bold',
    },
});