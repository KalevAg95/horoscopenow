
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Alert} from 'react-native';
 import { Header, ThemeProvider, Rating, Card, ListItem } from 'react-native-elements';
 import { FlatGrid } from 'react-native-super-grid';
 import { createAppContainer, createStackNavigator } from 'react-navigation';
 

 const instructions = Platform.select({
   ios: 'IOA,\n' + 'AD',
   android:
     'ANDROID,\n' +
     'AD',
 });
 

 const items = [
  { name: 'PISCES', color: '#80cdd4', color2: '#e5f5f6', text: 'Feb 19 - Mar 20', img: require('./res/horos_icons/pisces-fishes-shapes-sign.png'), multiplier: 1.9 },
  { name: 'AQUARIUS', color: '#80a8cf', color2: '#e5edf5', text: 'Jan 20 - Feb 18', img: require('./res/horos_icons/aquarius-zodiac-sign-symbol-1.png'), multiplier: 1.2 },
  { name: 'CAPRICORN', color: '#b88fc0', color2: '#f0e8f2', text: 'Dec 22 - Jan 19', img: require('./res/horos_icons/capricorn.png'), multiplier: 2.4 },
  { name: 'SAGITTARIUS', color: '#f18486', color2: '#fce6e6', text: 'Nov 22 - Dec 21', img: require('./res/horos_icons/sagittarius-sign-of-an-archer.png'), multiplier: 3.4 },
  { name: 'SCORPIO', color: '#81cba1', color2: '#e5f4ec', text: 'Oct 23 - Nov 21', img: require('./res/horos_icons/scorpion-shape.png'), multiplier: 1.1 },
  { name: 'LIBRA', color: '#7fbce1', color2: '#e5f1f9', text: 'Sep 23 - Oct 22', img: require('./res/horos_icons/libra-scale-balance-symbol.png'), multiplier: 2.1 },
  { name: 'VIRGO', color: '#dd87bf', color2: '#f8e7f2', text: 'Aug 23 - Sep 22', img: require('./res/horos_icons/virgo-female-silhouette.png'), multiplier: 4.4 },
  { name: 'LEO', color: '#f4a687', color2: '#fcede7', text: 'Jul 23 - Aug 22', img: require('./res/horos_icons/leo-astrological-sign.png'), multiplier: 1.5 },
  { name: 'CANCER', color: '#cadd8f', color2: '#f4f8e8', text: 'Jun 21 - Jul 22', img: require('./res/horos_icons/cancer-1.png'), multiplier: 5.4 },
  { name: 'GEMINI', color: '#fee980', color2: '#fefae5', text: 'May 21 - Jun 20', img: require('./res/horos_icons/gemini-two-twins-heads-symbol.png'), multiplier: 2.2 },
  { name: 'TAURUS', color: '#fddc7f', color2: '#fef8e5', text: 'Apr 20 - May 20', img: require('./res/horos_icons/taurus-bull-head-symbol-for-zodiac.png'), multiplier: 1.3 },
  { name: 'ARIES', color: '#f8be80', color2: '#fdf2e5', text: 'Mar 21 - Apr 19', img: require('./res/horos_icons/aries-zodiac-symbol-of-frontal-goat-head.png'), multiplier: 1.7 }
];
 class App extends Component{
    static navigationOptions = {
      title: 'HOROSCOPES NOW',
      headerTintColor: '#CFD8DC',
      headerStyle:{ backgroundColor: '#ffff', color: '#CFD8DC', fontSize: 28},
    };
  render() {
    return (
      <ThemeProvider>
      {/*<Header
        statusBarProps={{ barStyle: 'dark-content' }}
        barStyle="dark-content" // or directly
        centerComponent={{ text: 'HOROSCOPE', style: { color: '#CFD8DC', fontSize: 28, } }}
        containerStyle={{
          backgroundColor: '#455A64',
          justifyContent: 'space-around',
        }}
      />
      */}
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
            <TouchableHighlight 
            onPress={()=> this.props.navigation.navigate('Sign', {currentSign: item})} underlayColor="white">
            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
              <Image source={item.img} style={{width: 50, height: 50, tintColor:item.color2}} />
              <Text style={[styles.itemName, {color:item.color2}]}>{item.name}</Text>
              <Text style={[styles.itemCode, {color:item.color2}]}>{item.text}</Text>
              {/*<Button onPress={()=> this.props.navigation.navigate('Sign')} title="To Sign"></Button>*/}
            </View>
            </TouchableHighlight>
          )}
        />
        <Text style={styles.welcome}>Fucking Amazing AD</Text>
        <Text style={styles.instructions}>HERE</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      </ThemeProvider>
    );
  }
}
 
 class Sign extends Component{
  
  static navigationOptions = {
    title: 'HOROSCOPES NOW',
    headerTintColor: '#CFD8DC',
    headerStyle:{ backgroundColor: '#ffff', color: '#CFD8DC', fontSize: 28},
  };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: false,
      currentSign: this.props.navigation.getParam('currentSign', 'No Sign'),
      loveRate: 0,
      moneyRate: 0,
      luckRate: 0,

    }
  }
  
  componentDidMount(){
    let request = 'https://horoscope-api.herokuapp.com/horoscope/today/'+this.state.currentSign.name;
    fetch(request)
      .then((response)=> response.json())
      .then((responseJson) => {

        var dateArr = (Date.parse(responseJson.date)+'')
       
        var sum = dateArr.substring(5,7);

        var loveRate=parseInt(sum);
        var moneyRate=parseInt(sum);
        var luckRate=parseInt(sum);

        while(loveRate>5||moneyRate>5||luckRate>5){
        if(loveRate>5){
            loveRate=loveRate/(1.3*this.state.currentSign.multiplier);
          }
          if(moneyRate>5){
            moneyRate=moneyRate/(3.6*this.state.currentSign.multiplier);
          }
          if(luckRate>5){
            luckRate=luckRate/(5.9*this.state.currentSign.multiplier);
          }    
        }
        
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          loveRate: loveRate,
          moneyRate:moneyRate,
          luckRate: luckRate, 
          
        })

      }).catch((error)=>{
        console.log(error);
      })
  }

  render() {

    return (
      <ThemeProvider>
        <View style={[styles.container2, {backgroundColor: this.state.currentSign.color}]}>
          <Image source={this.state.currentSign.img} style={{width: 150, height: 150, tintColor: this.state.currentSign.color2}} />
          <Card 
          title={this.state.dataSource.sunsign}
          style={styles.cardTitle}>
            <View style={styles.user}>
              <Text style={styles.cardDate}>{this.state.dataSource.date}</Text>
              <Text style={styles.cardDesc}>{this.state.dataSource.horoscope}</Text>
            </View>
          </Card>
          <Card style={[styles.scoreCard]}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text>Love:    </Text>
              <Rating
                type='heart'
                ratingCount={5}
                startingValue={this.state.loveRate}                
                imageSize={32}
                ratingBackgroundColor='#c8c7c8'
                readonly={true}
              />
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text>Money: </Text>
              <Rating
              type='rocket'
                ratingCount={5}
                startingValue={this.state.moneyRate}
                imageSize={32}          
                ratingBackgroundColor='#c8c7c8'
                readonly={true}
              />
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text>Luck:    </Text>
              <Rating
                ratingCount={5}
                startingValue={this.state.loveRate}
                imageSize={32}
                ratingBackgroundColor='#c8c7c8'
                readonly={true}
              />
            </View>
          </Card>
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
     backgroundColor: '#ffffff',
     marginTop: 0
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
     color: '#455A64'
   },
   instructions: {
     textAlign: 'center',
     color: '#455A64',
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
     fontWeight: '600',
   },
   itemCode: {
     fontWeight: '600',
     fontSize: 10,
   },
   container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: -90
    },
   cardTitle:{
    fontSize: 25
   },
   cardDate: {
    textAlign: 'justify',
    fontSize: 10
   },
   cardDesc: {
    marginTop: 5,
    fontSize: 15
   },
   scoreCard: {
     width: 800
   }
 });
  
 const AppNavigator = createStackNavigator({
   Home: {
     screen: App,
   },
   Sign: {
     screen: Sign
   }
 });
 
 export default createAppContainer(AppNavigator);