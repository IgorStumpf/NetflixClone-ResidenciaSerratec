import React from 'react';
import styles from './styles'
import { Text, View, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
   
    const Hero = () => {
    return (
        <ImageBackground style={styles.hero}source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}>
                <Image style={styles.logo} 
                resizeMode="contain"
                source={{uri: 'https://i.imgur.com/4xN7wB8.png'}} />
                <View style={styles.containerTop10}>
                    <Image style={styles.badgeTop10} 
                    resizeMode= "contain"
                    source={require('../../assets/badge-top-10.png')} />
                    <Text style={styles.textTop10}>Top 10 hoje no Brasil</Text>

                </View>
        <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}></LinearGradient>

        </ImageBackground>

    );
}

export default Hero;