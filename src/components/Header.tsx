import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import { paletteObj } from '../../App';

interface HeaderProps extends paletteObj {}

export function Header({ colors }: HeaderProps) {
  const headerStyles = styles(colors)
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerText}>to.</Text>
      <Text style={[headerStyles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = (colors: HeaderProps['colors']) => StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: colors.headerBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: colors.headerTextColor,
    fontFamily: 'Poppins-Regular',
  }
});
