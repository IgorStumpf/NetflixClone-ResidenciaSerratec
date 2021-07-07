import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    menuHeader: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }, 
    previewContainer: {
        width: '100%',
        marginTop: 50,
    },

    previewTitle: {
        marginLeft: 20,
    },
    testButton: {
        width: '35%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
});

export default styles;