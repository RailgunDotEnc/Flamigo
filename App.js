// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/HomeScreen';
import HomeScreen1 from './Pages/HomeScreen1';
import HomeScreen2 from './Pages/HomeScreen2';
import Camera from './Pages/Camera';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home1" component={HomeScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Home2" component={HomeScreen2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
