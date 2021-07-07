import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'; 

const MenuButton = ({icon, text}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Icon name={icon} color='#fff' size={24} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>        
    );
}

export default MenuButton;