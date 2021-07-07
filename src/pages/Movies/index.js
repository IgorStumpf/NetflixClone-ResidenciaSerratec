import React, { useState } from 'react';
import styles from './styles';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Paragraph, Title, Caption } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuButton from '../../components/MenuButton';
import Section from '../../components/Section';
import Episodes from '../../components/Episodes';

const Movie = () => {
    const [tipo] = useState('serie')
    const [visible, setVisible] = useState(false)
    const [season, setSeason] = useState({value: 1, label: 'Temporada 1'})


    return (
/*         <>
        <SinglePickerMaterialDialog
            title={'Série - Temporadas'}
            items={[
                { value: 1, label: 'Temporada 1'},
                { value: 2, label: 'Temporada 2'},
                { value: 3, label: 'Temporada 3'},
            ]}
            visible={visible} // é uma flag/variável do state para saber se está visível ou não (true ou false)
            selectedItem={season}
            onOk={(result) => {
                setVisible(false); // quando clicar, quero esconder o picker, então o setVisible fica false
                setSeason(result.selectedItem); //o selectedItem retorna um objeto com label e value, segundo a documentação do material-dialog
            }}
        />; 
        
         
        
        PROFESSOR, INFELIZMENTE, ESSA PARTE NÃO RENDERIZOU DE FORMA ALGUMA, POR ISSO DEIXEI
        COMENTADA
        TENTEI DESCOBRIR SOLUÇÕES E NÃO CONSEGUI. UM OUTRO TIPO DE TAG PARA IMAGENS NÃO ESTAVA
        FUNCIONANDO DEVIDO AO EXPO E CONSEGUI CORRIGIR,
        MAS NÃO SEI SE É O MESMO CASO, REALMENTE NÃO DESCOBRI MESMO
        EU FIZ 3 PÁGINAS (LOGIN, HOME E MOVIES), MAS NÃO CONSEGUI EXIBIR IMAGENS DIFERENTES
        FICOU FALTANDO A PARTE LÓGICA QUE REALMENTE ESTOU TENDO MAIORES DIFICULDADES
        PEÇO DESCULPAS E AGRADEÇO.

        */




        <ScrollView style={styles.container}>
            <ImageBackground source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}} style={styles.hero} />
            <View style={styles.control}>
                <Title>Nome do Filme</Title>
                <TouchableOpacity style={styles.testButton}>
                <Entypo name="controller-play" mode='contained' size={28} color="#000" />
                <Text style={{fontSize: 16}}>Assistir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton}>
                <AntDesign name="download" size={28} color="#fff" />
                <Text style={{fontSize: 16, color: '#fff'}}> Baixar</Text>
                </TouchableOpacity>
                <Paragraph style={{color: '#fff'}}>
                    Pregadores Profanos. Autoridades corruptas. Amantes. Assassinos. Numa cidade cheia de pecadores, um jovem busca justiça.
                </Paragraph>
                <Caption style={styles.infos}>
                    Elenco: Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes.
                    Gêneros: Ação, Aventura, Drama. Cenas e momentos: Violentos.
                </Caption>
            <View style={styles.options}>
                <MenuButton icon='plus' text=' Minha lista ' />
                <MenuButton icon='thumb-up' text=' Classifique ' />
                <MenuButton icon='share-variant' text=' Compartilhe ' />
            </View>
            {tipo == "serie" && (
                <>
                    <TouchableOpacity 
                        /* onPress={() => setVisible(true)} */
                        style={styles.buttonSeason}>
                        <Text style={styles.textSeason}>Temporada 1</Text>
                        <Icon name='chevron-down' color='#fff' size={20} />
                    </TouchableOpacity>

                    <FlatList data={[1, 2, 3, 4, 5]}
                        renderItem={({ item, index}) => <Episodes key={index} />}
                        />
                </>
            )}
            </View>
            {tipo == "movie" && <Section hasTopBorder />}
        </ScrollView>
        /* </> */
    );
}

export default Movie;