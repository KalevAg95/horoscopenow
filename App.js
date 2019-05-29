/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Header, ThemeProvider, Rating,AirbnbRating } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import { createAppContainer, createStackNavigator } from 'react-navigation';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'You can also read you weekly,\n' +
    'and yearly Horscopes',
});

const items = [
  { name: 'PISCES', color: '#80CDD4', text: 'February 19 - March 20', img: require('./res/horos_icons/pisces-fishes-shapes-sign.png') },
  { name: 'AQUARIUS', color: '#80A8CF', text: 'January 20 - February 18', img: require('./res/horos_icons/aquarius-zodiac-sign-symbol-1.png') },
  { name: 'CAPRICORN', color: '#B88FC0', text: 'December 22 - January 19', img: require('./res/horos_icons/capricorn.png') },
  { name: 'SAGITTARIUS', color: '#F38388', text: 'November 22 - December 21', img: require('./res/horos_icons/sagittarius-sign-of-an-archer.png') },
  { name: 'SCORPIO', color: '#80CAA0', text: 'October 23 - November 21', img: require('./res/horos_icons/scorpion-shape.png') },
  { name: 'LIBRA', color: '#7FBCE1', text: 'September 23 - October 22', img: require('./res/horos_icons/libra-balanced-scale-zodiac-symbol.png') },
  { name: 'VIRGO', color: '#E487C0', text: 'August 23 - September 22', img: require('./res/horos_icons/virgo-female-silhouette.png') },
  { name: 'LEO', color: '#E1A490', text: 'July 23 - August 22', img: require('./res/horos_icons/leo-lion-astrological-symbol.png') },
  { name: 'CANCER', color: '#CADD8F', text: 'June 21 - July 22', img: require('./res/horos_icons/cancer-1.png') },
  { name: 'GEMINI', color: '#FEE980', text: 'May 21 - June 20', img: require('./res/horos_icons/gemini-twins-symbol.png') },
  { name: 'TAURUS', color: '#FDDC7F', text: 'April 20 - May 20', img: require('./res/horos_icons/taurus-bull-head-symbol-for-zodiac.png') },
  { name: 'ARIES', color: '#F8BE80', text: 'March 21 - April 19', img: require('./res/horos_icons/aries-zodiac-symbol-of-frontal-goat-head.png') }
];

class App extends Component{
  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (
              <TouchableOpacity 
              onPress={()=> this.props.navigation.navigate('Sign', {currentSign: item})}
              style={[styles.itemContainer, { backgroundColor: item.color }]}>
                <Image source={item.img} style={{width: 50, height: 50}} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.text}</Text>            
              </TouchableOpacity>
            )}
          />     
        </View>
      </ThemeProvider>
    );
  }
}

class Sign extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: false,
      currentSign: this.props.navigation.getParam('currentSign', 'No Sign'),
    }
  }
  
  componentDidMount(){
    

    let request = 'https://horoscope-api.herokuapp.com/horoscope/today/'+this.state.currentSign.name;

    fetch(request)
      .then((response)=> response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        })

      }).catch((error)=>{
        console.log(error);
      })
  }

  render() {
    return (
      <ThemeProvider>

        <View style={styles.container}>
          <Image source={this.state.currentSign.img} style={{width: 200, height: 200}} />
          <Text>{this.state.dataSource.sunsign}</Text>
          <Text>{this.state.dataSource.date}</Text>
          <Text>{this.state.dataSource.horoscope}</Text>
          <Text>Love: </Text>
          <Rating
            type='heart'
            startingValue={5}
            ratingCount={5}
            imageSize={30}
            ratingBackgroundColor='#c8c7c8'
            readonly={true}
          />
          <Text>Money: </Text>
          <Rating
          type='rocket'
            ratingCount={5}
            startingValue={2}
            imageSize={30}          
            ratingBackgroundColor='#c8c7c8'
            readonly={true}
          />
          <Text>Luck: </Text>
          <Rating
            ratingCount={5}
            startingValue={3}
            imageSize={30}
            ratingBackgroundColor='#c8c7c8'
            readonly={true}
          />
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
 
const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Sign: {
    screen: Sign
  }
});

export default createAppContainer(AppNavigator);