import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    hero: {
        marginTop: 33,
        height: 440,
        width: '105%',
    },
    logo: {
        marginTop: 200,
        alignSelf: 'flex-end',
        width: 300,
        height: 150,
        position: 'absolute',
        zIndex: 10,
    },
    containerTop10: {
        position: 'absolute',
        zIndex: 10,
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '93%',
        alignItems: 'center',
    },
    badgeTop10: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    textTop10: {
        color: '#fff',
        fontSize: 15,
    },
    gradient: {
        width: '100%',
        height: 90,
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
    }

});

export default styles;