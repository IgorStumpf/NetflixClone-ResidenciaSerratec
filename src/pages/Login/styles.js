import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 72,
        paddingHorizontal: 20, 
    },
    back: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        height: 205,
        width: 205,
        display: 'flex',
        alignSelf: 'center',
    },
    margin: {
        marginBottom: 20,
    },
    smallText: {
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        marginTop: 30
    }


})

export default styles;