import React from 'react';
import { useFonts } from 'expo-font';
import { Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold, 
    Raleway_700Bold, 
    Raleway_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}


