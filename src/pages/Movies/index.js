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
    const teste = [{ title: '1. Chemistry Class',  time: '43m', ep: 'https://i.pinimg.com/564x/c6/30/62/c63062f105179dd3bcc9bb587f373ae3.jpg' },
     {title: "2. Jesse pokemon's", time: '41m',  ep: 'https://pokemongolive.com/img/posts/teamgorocket-jessie-james.jpg'},
     {title: '3. TravisScott.mp3', time: '20min', ep: 'https://talkglitz.media/wp-content/uploads/2018/08/Download-mp3-Travis-Scott-ft-Playboi-Carti-Houdini-mp3-download.jpg'},
     {title: '4. Me and You', time: '5 minutin sem perder amizade', ep: 'https://i.ytimg.com/vi/UdtKuSpF3-I/hqdefault.jpg'},
     {title: '5. Maria do Bairro', time: '1h10min de Nazaré Tedesco', ep: 'https://img.estadao.com.br/resources/jpg/6/8/1558380297686.jpg'}
    ]


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
                <Title>Breaking Bad</Title>
                <TouchableOpacity style={styles.testButton}>
                <Entypo name="controller-play" mode='contained' size={28} color="#000" />
                <Text style={{fontSize: 16}}>Assistir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton}>
                <AntDesign name="download" size={28} color="#fff" />
                <Text style={{fontSize: 16, color: '#fff'}}> Baixar</Text>
                </TouchableOpacity>
                <Paragraph style={{color: '#fff'}}>
                Uma turminha da pesada que produz dorguinhas porque seu professor de química assim ensinou.
                </Paragraph>
                <Caption style={styles.infos}>
                    Elenco: Vin Diesel idoso, Jesse James Pokemon, Angelica do Luciano Huck.
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

                    <FlatList data={teste}
                        keyExtractor={item => item.title}
                        renderItem={({ item }) => (<Episodes title={item.title} time={item.time} ep={item.ep} />)
                        
                    }
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