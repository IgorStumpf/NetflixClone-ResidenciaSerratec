import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    testButton: {
        width: '100%',
        height: 38,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    downloadButton: {
        width: '100%',
        height: 38,
        backgroundColor: '#303030',
        flexDirection: 'row',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    hero: {
        marginTop: 40,
        height: 300,
        width: '100%',
    },
    control:{
        padding: 20,
    },
    infos: {
        marginBottom: 20,
        color: '#bbb' 
    },
    options: {
        width: '100%',
        height: 38,
        paddingRight: 90,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
        marginBottom: 20,

    },
    buttonSeason: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginBottom: 40,
    },
    textSeason: {
        color: '#fff'

    },

});

export default styles;