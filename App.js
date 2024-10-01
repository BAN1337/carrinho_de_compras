import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import CartProvider from './src/contexts/cart';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}