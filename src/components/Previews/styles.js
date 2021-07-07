import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create ({
    flatListContainer: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 30,
    },
    previewImage: {
        backgroundColor: '#E50914',
        padding: 2,
        width: 88,
        height: 91,
        borderRadius: 90,

    },
    cover: {
        height: 87,
        width: 85,
        borderRadius: 90,
    },
    logo: {
        width: 85,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        alignSelf: 'center',
        flex: 1,
    },
    gradient: {
        width: '100%',
        height: 50,
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
    },
});

export default styles;