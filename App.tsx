import React, { useState, useEffect } from 'react';
import { StatusBar, Switch, View, Text, StyleSheet } from 'react-native';
import { Home } from './src/pages/Home';

import { palette } from './src/theme';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [colors, setColors] = useState(palette['light']);
  
  useEffect(() => {
    setColors(isEnabled ? palette['dark'] : palette['light'])
  }, [isEnabled]);
  
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <View style={styles(colors).themeSwitcher}>
        <Text>☀️</Text>
        <Switch
          trackColor={{ false: colors.switcherTrackColorOff, true: colors.switcherTrackColorOn }}
          thumbColor={isEnabled ? colors.switcherThumbColorOn : colors.switcherThumbColorOff}
          ios_backgroundColor={colors.switcherIosBackgroundColor}
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
        <Text>🌙</Text>
      </View>
      <Home colors={colors} />
    </>
  );
}

const styles = (colors) => StyleSheet.create({
  themeSwitcher: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.headerBackgroundColor,
  }
})
