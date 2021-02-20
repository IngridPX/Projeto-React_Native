import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login'
import Home from './components/home'
import Bolos from './components/bolos'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName='Login' headerMode='screen' >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Tela de Login' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Bolos" component={Bolos} options={{ title: 'Bolos' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
