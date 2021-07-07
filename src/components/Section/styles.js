import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }, 
    title: {
        marginLeft: 20,
    },
    cover: {
        width: 95,
        height: 140,
        borderRadius: 4,
        overflow: 'hidden',
    },
    logo: {
        width: '100%',
        height: 40,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center',
    },
    list: {
        width: '100%',
        height: 150,
        marginTop: 10,
        marginBottom: 30,
    },
    borderTop:{
        backgroundColor: '#E50914',
        height: 3,
        width: 100,
        left: 20,
        marginBottom: 10,
    },

});

export default styles;