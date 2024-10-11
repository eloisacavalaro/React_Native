import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function FilmeDetalhes({ route }) {
    const { filme } = route.params || {}; 

    console.log(filme);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Detalhes do filme</Text>
            {filme && <Image source={filme.image} style={styles.image} />}
            <Text style={styles.nome}>{filme?.nome || 'No Title'}</Text>
            <Text style={styles.sinopse}>Sinopse: {filme?.sinopse || 'No Synopsis'}</Text>
            <Text style={styles.duracao}>Duração: {filme?.duracao || 'Unknown'}</Text>
            <Text style={styles.genero}>{filme?.genero || 'Unknown'}</Text>
            <Text style={styles.pais}>País de Origem: {filme?.pais || 'Unknown'}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#000000',
        alignItems: 'center', 
    },
    titulo: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
    },
    image: {
        height: 300,
        width: 200, 
        marginBottom: 10, 
        marginTop: 10,
        alignSelf: 'center', 
    },
    nome: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    sinopse: {
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16,
    },
    duracao: {
        color: 'white',
        marginBottom: 8,
        textAlign: 'center',
        fontSize: 16,
    },
    genero: {
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16,
    },
    pais: {
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16,
    },
});