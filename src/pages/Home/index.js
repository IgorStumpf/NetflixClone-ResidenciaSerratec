import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Title } from 'react-native-paper';
import MenuButton from '../../components/MenuButton';
import Preview from '../../components/Previews';
import Section from '../../components/Section';
import { Entypo } from '@expo/vector-icons';

const Home = () => { 
    return (
        <ScrollView style = {styles.container}>
        <Header />
        <Hero />
        <View style={styles.menuHeader}>
            <MenuButton icon="plus" text='Minha lista' />
            <TouchableOpacity style={styles.testButton}>
            <Entypo name="controller-play" size={28} color="black" />
            <Text style={{fontSize: 16}}>Assistir</Text>
            </TouchableOpacity>
            <MenuButton icon="information-outline" text='Saiba mais' />
        </View>
        
        <View style={styles.previewContainer}>
            <Title style={styles.previewTitle}>Prévias</Title>
            <Preview />
        </View>

        {[1, 2, 3, 4].map((section, index) => (
            <Section key={index} />
        ))}

        </ScrollView>
    );
};

export default Home;