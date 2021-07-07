import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles'


const Login = () => {

    const [credencial, setCredencial] = useState({
        email: '',
        senha: ''
    }) 

    return (
        <View style={styles.back}>
            
            <Image style={styles.logo} 
            resizeMode='contain'
            source={require('../../assets/logo.png')} />
            
            <View>
                <TextInput
                label="E-mail ou Telefone"
                mode = 'flat'
                style={styles.margin}
                value={credencial.email}
                onChangeText={(text) => setCredencial({...credencial, email: text})}
                />

                <TextInput
                label="Senha"
                mode = 'flat'
                secureTextEntry
                style={styles.margin}
                value={credencial.senha}
                onChangeText={(text) => setCredencial({...credencial, senha: text})}
                />

                <Button
                    mode="contained"
                    style={styles.margin}
                    onPress={() => console.log('Pressed')}
                    >
                    Entrar
                </Button>

                <Button
                    style={styles.margin}
                    onPress={() => console.log('Pressed')}
                    theme={{colors: {primary:'#fff'}}}
                    >
                    Recuperar Senha
                </Button>

                <Text style={styles.smallText}>
                    O acesso está protegido pelo Google e reCAPTCHA para garantir que você não é um robô. Saiba mais.
                </Text>

            </View>

        </View>
    )
}

export default Login;