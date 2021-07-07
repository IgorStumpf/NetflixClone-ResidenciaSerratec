import React from 'react';
import { Text, View, TouchableOpacity, Image, Gradient } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Feather } from '@expo/vector-icons';

const Header = () => {
    return ( 
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']}> 
            <View style={styles.headerSearch}>
                <Image style={styles.logoHeader} source={require('../../assets/icon.png')} />
                <Feather style={styles.search} name="search" size={24} color="#fff" />
            </View>
            <View  style={styles.headerArea}>
                <TouchableOpacity>
                    <Text style={styles.text}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Minha lista</Text>
                </TouchableOpacity>

            </View>
         </LinearGradient>

    );
}

export default Header;