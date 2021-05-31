import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

import { themes } from './src/theme';

export interface AppProps {
  onThemeChange: (isDarkTheme: boolean) => void;
  theme: object;
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home onThemeChange={setIsDarkTheme} theme={isDarkTheme ? themes['dark'] : themes['light']}/>
    </>
  );
}
