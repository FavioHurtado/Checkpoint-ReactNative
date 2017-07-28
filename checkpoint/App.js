/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Mapa from './app/Components/Mapa/Mapa';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
const puntosDeControl=[
    {latitude: -17.8,
     longitude: -63.182291,},
     {latitude: -17.7857846,
     longitude: -63.182291,},
     {latitude: -17.787,
     longitude: -63.182291,},
    

]
export default class checkpoint extends Component {
  render() {
    //console.log('a');
    return (
      <View>
      <Text>Hola hg!!! </Text>
       <Mapa />
       
      </View>
     
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
  
});

AppRegistry.registerComponent('checkpoint', () => checkpoint);
