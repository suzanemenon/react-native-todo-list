import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import { AppProps } from '../../App';

export function Header({ onThemeChange, theme }: AppProps) {
  const { theme: _theme } = theme['header'];
  
  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    onThemeChange(isEnabled);
  };

  return (
    <View style={styles(theme).header}>
      <Switch
          trackColor={{ false: theme.themeSwitchTrackColorOff, true: theme.themeSwitchTrackColorOn }}
          thumbColor={isEnabled ? theme.themeSwitchThumbColorOn : theme.themeSwitchThumbColorOff}
          ios_backgroundColor={theme.themeSwitchIosBackgroundColor}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      <Text style={styles(theme).headerText}>to.</Text>
      <Text style={[styles(theme).headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = (theme: any) => StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: theme['header'].backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: theme['header'].textColor,
    fontFamily: 'Poppins-Regular',
  }
});
