/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';
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
      { name: 'PISCES', color: '#029BA9', text: 'February 19 - March 20', img: require('./res/horos_icons/pisces-fishes-shapes-sign.png') },
      { name: 'AQUARIUS', color: '#0151A0', text: 'January 20 - February 18', img: require('./res/horos_icons/aquarius-zodiac-sign-symbol-1.png') },
      { name: 'CAPRICORN', color: '#722081', text: 'December 22 - January 19', img: require('./res/horos_icons/capricorn.png') },
      { name: 'SAGITTARIUS', color: '#E80711', text: 'November 22 - December 21', img: require('./res/horos_icons/sagittarius-sign-of-an-archer.png') },
      { name: 'SCORPIO', color: '#029642', text: 'October 23 - November 21', img: require('./res/horos_icons/scorpion-shape.png') },
      { name: 'LIBRA', color: '#007AC4', text: 'September 23 - October 22', img: require('./res/horos_icons/libra-balanced-scale-zodiac-symbol.png') },
      { name: 'VIRGO', color: '#C90F81', text: 'August 23 - September 22', img: require('./res/horos_icons/virgo-female-silhouette.png') },
      { name: 'LEO', color: '#C34921', text: 'July 23 - August 22', img: require('./res/horos_icons/leo-lion-astrological-symbol.png') },
      { name: 'CANCER', color: '#96BB20', text: 'June 21 - July 22', img: require('./res/horos_icons/cancer-1.png') },
      { name: 'GEMINI', color: '#FED401', text: 'May 21 - June 20', img: require('./res/horos_icons/gemini-twins-symbol.png') },
      { name: 'TAURUS', color: '#FBBA00', text: 'April 20 - May 20', img: require('./res/horos_icons/taurus-bull-head-symbol-for-zodiac.png') },
      { name: 'ARIES', color: '#F17E02', text: 'March 21 - April 19', img: require('./res/horos_icons/aries-zodiac-symbol-of-frontal-goat-head.png') }
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
              <Image source={item.img} style={{width: 50, height: 50}} />
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