/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import LatLng from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class marcadores extends Component {
  
  render() {
    //console.log("hi");
    return (
      <MapView.Marker
      coordinate=
          {
            {latitude: -17.7857846,
            longitude: -63.182291}
          }/>
    );
  }
}
/*const puntosDeControl=[
    {latitude: -17.79,
     longitude: -63.182291,},
     {latitude: -17.7857846,
     longitude: -63.182291,},
     {latitude: -17.782,
     longitude: -63.182291,},
    

]
*/
export default class mapa extends Component {
  constructor() {
    super();
    
    this.state = {
      region: {
            latitude: -17.7857846,
            longitude: -63.182291,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          markers:[],
          puntosDeControl:[],
    };
    //console.log("o");
    setTimeout(()=>this.onMapReady(), 1000);
    //this.Dibujar(puntosDeControl[0]);
  }
  Dibujar(x) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: x          
          
        },
      ],
    });
  }
  onMapReady(){
    //console.log("ready");
    //this.Dibujar(puntosDeControl[1]);
     this.puntosDeControl=
     [
    {latitude: -17.79,
     longitude: -63.182291,},
     {latitude: -17.7857846,
     longitude: -63.182291,},
     {latitude: -17.782,
     longitude: -63.182291,},
    

]
    this.puntosDeControl.forEach((val,index)=>{
      this.Dibujar(val);
    });
    /*this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: {latitude: -17.7857846,longitude: -63.182291}          
          
        },
      ],
    });*/
  }
  render() {
    return (
       <View style ={styles.container1}>
        <MapView
          style={styles.map}                 
          region= {{
            latitude: -17.7857846,
            longitude: -63.182291,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}

          onMapReady={this.onMapReady}
        >
         {this.state.markers.map(marker => (
            <MapView.Marker
            
              coordinate={marker.coordinate}
              
            />
          ))}

        
        </MapView>
       
      </View>
     
    );
  }
}

const styles = StyleSheet.create({  
  container1: {
    
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
   
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('Mapa', () => Mapa);
