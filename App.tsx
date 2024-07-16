import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import NavBar from './components/NavBar';
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from '@gluestack-ui/themed';
const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <NavBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}