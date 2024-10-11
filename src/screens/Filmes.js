import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import CardFilme from "../components/CardFilme";

// Array com filmes para cada seção
const filmesPorSecao = {
    emCartaz: [
        { id: '1', nome: 'My Hero Academia: Agora É Sua Vez', image: require('../../assets/filmes/filme1.jpg'), sinopse: '“Em seguida, é a sua vez!”. Essas foram as palavras que All Might, símbolo da paz, proferiu após derrotar All For One, símbolo do mal. All Might pode não ser mais o herói número 1 de uma sociedade em que a maioria da população tem uma peculiaridade superpoderosa, mas Deku e seus colegas do Curso de Heróis da U.A. High School estão determinados a levar adiante sua vontade e seus ideais como heróis.',
            duracao: '1h50', genero:'Ação, Animação, Ficção', pais: 'Japão', 
         },
        { id: '2', nome: 'Meu Malvado Favorito 4', image: require('../../assets/filmes/filme2.jpg'), sinopse: 'Gru enfrenta novos inimigos. Maxime Le Mal e sua namorada mulher-fatal Valentina (Sofia Vergara, indicada ao Emmy) são tão malévolos que não deixam alternativa à família Gru senão fugir.',
            duracao: '1h34', genero: 'Ação, Animação, Aventura', pais: 'Estados Unidos'
         },
        { id: '3', nome: 'Divertida Mente 2', image: require('../../assets/filmes/filme3.jpg'), sinopse: 'Sequência de Divertidamente em que o tempo passou e Riley cresceu, agora já tem corpo e mente de adolescente. Alegria, Raiva, Medo, Nojo e Tristeza são mais uma vez os protagonistas da história.',
            duracao: '1h35', genero: 'Animação, Aventura', pais: 'Estados Unidos' },
    ],
    emBreve: [
        { id: '4', nome: 'Moana 2', image: require('../../assets/filmes/filme4.jpeg'), sinopse: 'Sequência das aventuras de Moana e sua turma! Depois de receber um chamado inesperado de seus ancestrais navegadores, Moana vai viajar para mares distantes da Oceania em águas perdidas e realizar mais uma aventura perigosa',
            duracao: '?', genero: "Animação", pais: 'Estados Unidos' 
         },
        { id: '5', nome: 'Venom', image: require('../../assets/filmes/filme5.jpeg'), sinopse: 'Em Venom: A Última Rodada, Tom Hardy retorna ao papel de Venom, um dos maiores e mais complexos personagens da Marvel, para o filme final da trilogia. Eddie e Venom estão fugindo. Perseguidos pelos dois mundos, a dupla é obrigada a tomar uma decisão devastadora de que vai fechar as cortinas da última rodada de Venom e Eddie.',
            duracao: '2h15', genero: 'Ação, Aventura, Ficção, Suspense', pais: 'Estados Unidos'  },
            
        { id: '6', nome: 'Operação Natal', image: require('../../assets/filmes/filme6.jpeg'), sinopse: 'Em OPERAÇÃO NATAL, depois que o Papai Noel – codinome: Das Neves – é sequestrado, o Chefe de Segurança do Polo Norte deve se unir ao mais infame caçador de recompensas do mundo em uma missão global e cheia de ação para salvar o Natal.',
            duracao: '1h42', genero: 'Ação', pais: 'Estados Unidos'
         },
    ],
};

export default function Filmes() {
    const [selectedSection, setSelectedSection] = useState('emCartaz'); 

    // Função para alternar entre as seções
    const toggleSection = (section) => {
        setSelectedSection(section);
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => toggleSection('emCartaz')} style={styles.button}>
                    <Text style={styles.buttonText}>Em Cartaz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleSection('emBreve')} style={styles.button}>
                    <Text style={styles.buttonText}>Em Breve</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filmesPorSecao[selectedSection]} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardFilme filme={item} /> 
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});