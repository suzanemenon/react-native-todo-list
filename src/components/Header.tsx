import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

export function Header({ colors }) {
  return (
    <View style={styles(colors).header}>
      <Text style={styles(colors).headerText}>to.</Text>
      <Text style={[styles(colors).headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = (colors) => StyleSheet.create({
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
