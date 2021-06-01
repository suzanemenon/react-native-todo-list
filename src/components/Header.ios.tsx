import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { paletteObj } from '../../App';

interface HomeProps extends paletteObj {}

export function Header({colors}: HomeProps) {
  const headerStyles = styles(colors);

  return (
    <SafeAreaView style={headerStyles.container}>
      <View style={headerStyles.header}>
        <Text style={headerStyles.headerText}>to.</Text>
        <Text style={[headerStyles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = (colors: paletteObj['colors']) => StyleSheet.create({
  container: {
    backgroundColor: colors.headerBackgroundColor,
  },
  header: {
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
