import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Caption, Title } from 'react-native-paper';

const Episodes = () => {
    return (
        <TouchableOpacity style={styles.container}> 
            <View style={styles.episodeOrder}>
                <Image style={styles.cover} source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}/>
                <View>
                    <Title style={{fontSize: 19}}>1. Nome do Episódio </Title>
                    <Caption>45 mins. </Caption>
                </View>
            </View> 
            <Caption>Uma turminha da pesada que produz dorguinhas porque seu professor de química assim ensinou.</Caption>
        </TouchableOpacity>
    );
};

export default Episodes; 