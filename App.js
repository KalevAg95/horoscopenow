/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
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
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    const items = [
      { name: 'PISCES', color: '#607D8B', color2: '#B0BEC5', text: 'Feb 19 - Mar 20', img: require('./res/horos_icons/pisces-fishes-shapes-sign.png') },
      { name: 'AQUARIUS', color: '#78909C', color2: '#B0BEC5', text: 'Jan 20 - Feb 18', img: require('./res/horos_icons/aquarius-zodiac-sign-symbol-1.png') },
      { name: 'CAPRICORN', color: '#607D8B', color2: '#B0BEC5', text: 'Dec 22 - Jan 19', img: require('./res/horos_icons/capricorn.png') },
      { name: 'SAGITTARIUS', color: '#78909C', color2: '#B0BEC5', text: 'Nov 22 - Dec 21', img: require('./res/horos_icons/sagittarius-sign-of-an-archer.png') },
      { name: 'SCORPIO', color: '#607D8B', color2: '#B0BEC5', text: 'Oct 23 - Nov 21', img: require('./res/horos_icons/scorpion-shape.png') },
      { name: 'LIBRA', color: '#78909C', color2: '#B0BEC5', text: 'Sep 23 - Oct 22', img: require('./res/horos_icons/libra-scale-balance-symbol.png') },
      { name: 'VIRGO', color: '#607D8B', color2: '#B0BEC5', text: 'Aug 23 - Sep 22', img: require('./res/horos_icons/virgo-female-silhouette.png') },
      { name: 'LEO', color: '#78909C', color2: '#B0BEC5', text: 'Jul 23 - Aug 22', img: require('./res/horos_icons/leo-astrological-sign.png') },
      { name: 'CANCER', color: '#607D8B', color2: '#B0BEC5', text: 'Jun 21 - Jul 22', img: require('./res/horos_icons/cancer-1.png') },
      { name: 'GEMINI', color: '#78909C', color2: '#B0BEC5', text: 'May 21 - Jun 20', img: require('./res/horos_icons/gemini-twins-symbol.png') },
      { name: 'TAURUS', color: '#607D8B', color2: '#B0BEC5', text: 'Apr 20 - May 20', img: require('./res/horos_icons/taurus-bull-head-symbol-for-zodiac.png') },
      { name: 'ARIES', color: '#78909C', color2: '#B0BEC5', text: 'Mar 21 - Apr 19', img: require('./res/horos_icons/aries-zodiac-symbol-of-frontal-goat-head.png') }
    ];
    return (
      <ThemeProvider>
      <Header
        statusBarProps={{ barStyle: 'dark-content' }}
        barStyle="dark-content" // or directly
        centerComponent={{ text: 'HOROSCOPE', style: { color: '#CFD8DC', fontSize: 28, } }}
        containerStyle={{
          backgroundColor: '#455A64',
          justifyContent: 'space-around',
        }}
      />
      <View style={styles.container}>
        <FlatGrid
          itemDimension={137}
          items={items}
          style={styles.gridView}
          spacing={0}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
              <Image source={item.img} style={{width: 50, height: 50, tintColor:item.color2}} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.text}</Text>
            </View>
            </TouchableHighlight>
          )}
        />
        {/*
        <Text style={styles.welcome}>Tap on your Sign to get Started</Text>
        <Text style={styles.instructions}>Horoscopes are updated daily</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        */}
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
    backgroundColor: '#546E79',
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
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 0,
    height: 150,
    padding: 10,
  },
  itemName: {
    fontSize: 14,
    color: '#CFD8DC',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 10,
    color: '#CFD8DC',
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