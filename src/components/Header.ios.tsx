import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { themes } from '../theme';

const theme = themes['dark']['header'];

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
  },
  header: {
    paddingBottom: 44,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: theme.textColor,
    fontFamily: 'Poppins-Regular',
  }
});
