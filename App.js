import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilmeDetalhes from './src/screens/FilmeDetalhes';
import HelloWorld from './src/screens/Inicio';
import Filmes from './src/screens/Filmes';
import { Image, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Hello World'>
                <Stack.Screen 
                    name='Hello World' 
                    component={HelloWorld} 
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require('./assets/image.jpg')}
                                style={styles.image} 
                            />
                        ),
                        headerStyle: {
                            backgroundColor: '#000000',
                            height: 110,
                        },
                        headerTintColor: '#fff',
                    }} 
                />
                <Stack.Screen name='Filmes' component={Filmes} />
                <Stack.Screen name='Detalhes do filme' component={FilmeDetalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
    }
});

