/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header, ThemeProvider, Image } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'You can also read you weekly,\n' +
    'and yearly Horscopes',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const items = [
      { name: 'PISCES', color: '#1abc9c', text: 'February 19 - March 20' },
      { name: 'AQUARIUS', color: '#2ecc71', text: 'February 19 - March 20' },
      { name: 'CAPRICORN', color: '#3498db', text: 'February 19 - March 20' },
      { name: 'SAGITTARIUS', color: '#9b59b6', text: 'February 19 - March 20' },
      { name: 'SCORPIO', color: '#34495e', text: 'February 19 - March 20' },
      { name: 'LIBRA', color: '#16a085', text: 'February 19 - March 20' },
      { name: 'VIRGO', color: '#27ae60', text: 'February 19 - March 20' },
      { name: 'LEO', color: '#2980b9', text: 'February 19 - March 20' },
      { name: 'CANCER', color: '#8e44ad', text: 'February 19 - March 20' },
      { name: 'GEMINI', color: '#2c3e50', text: 'February 19 - March 20' },
      { name: 'TAURUS', color: '#f1c40f', text: 'February 19 - March 20' },
      { name: 'ARIES', color: '#e67e22', text: 'February 19 - March 20' }
    ];
    return (
      <ThemeProvider>
      <Header
        statusBarProps={{ barStyle: 'dark-content' }}
        barStyle="dark-content" // or directly
        centerComponent={{ text: 'HOROSCOPE', style: { color: '#4C566A', fontSize: 25, } }}
        containerStyle={{
          backgroundColor: '#141516',
          justifyContent: 'space-around',
        }}
      />

      <View style={styles.container}>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.text}</Text>
            </View>
          )}
        />
        <Text style={styles.welcome}>Tap on your Sign to get Started</Text>
        <Text style={styles.instructions}>Horoscopes are updated daily</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});