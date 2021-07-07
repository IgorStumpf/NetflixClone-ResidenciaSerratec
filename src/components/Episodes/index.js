import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Caption, Title } from 'react-native-paper';

const Episodes = (props) => {
    return (
        <TouchableOpacity style={styles.container}> 
            <View style={styles.episodeOrder}>
                <Image style={styles.cover} source={{uri:props.ep}}/>
                <View>
                    <Title style={{fontSize: 19}}>{props.title}</Title>
                    <Caption>{props.time}</Caption>
                </View>
            </View> 
            <Caption>Uma turminha da pesada que produz dorguinhas porque seu professor de química assim ensinou.</Caption>
        </TouchableOpacity>
    );
};

export default Episodes; 