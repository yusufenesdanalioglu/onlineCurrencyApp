/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/companents/header';
import Converter from './src/companents/converter';

function CurrencyConverter(props) {
  return (
    <View style={styles.container}>
      <Header headerText="Currency Calculater" />
      <Converter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e7eb',
  },
});

export default CurrencyConverter;
