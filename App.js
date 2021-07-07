import { StatusBar } from 'expo-status-bar';
import React from 'react';
/* import Home from './src/pages/Home' */
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
/* import Movie from './src/pages/Movies' */
import Routes from './routes'
import Login from './src/pages/Login' 

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#fff',
      text: '#fff'
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#000' />
      <Login />
{/*   <Routes />
      <Movie />
      <Home /> */}
    </PaperProvider>
  )
}

export default App;