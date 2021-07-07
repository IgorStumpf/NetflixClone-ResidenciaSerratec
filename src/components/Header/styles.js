import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 16,
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
        marginTop: 30,
    },
    headerSearch: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    search:{
        marginTop: 25,
        marginLeft: 260,
        height: 38,
        alignSelf: 'flex-end',
        position: 'absolute'
    },
    logoHeader:{
        marginTop: 20,
        marginRight: 300,
        height: 40,
        width: 23,
    },
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 50,
        alignItems: 'center',
    },

});

export default styles;