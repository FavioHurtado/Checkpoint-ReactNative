/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import axios from 'axios';
import LatLng from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView
} from 'react-native';
id=0;
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      region: {
            latitude: -17.7857846,
            longitude: -63.182291,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          markers:[],
          puntosDeControl:[],
          texto:'',
          reporte:[],
    };
    this.setState({
      reporte: [
        ...this.state.reporte,
        {
          key:1,
          fechaHora:2,
          idVehiculo:3,     
        },
      ],
    });
    //console.log("o");
    setTimeout(()=>this.onMapReady(), 1000);
    //this.Dibujar(puntosDeControl[0]);
  }
  Dibujar(x) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: x.pos,
          key:x.key,  
          id:x.key,     
          
        },
        
      ],
    });
  }
  LLenarReporte(x) {
      console.log('dpdpkskal');
    console.log(x.fechaHora);
    this.setState({
      reporte: [
        ...this.state.reporte,
        {
          key:x.id,
          fechaHora:x.fechaHora,
          idVehiculo:x.idVehiculo,     
          
        },
        
      ],
    });
    
  }
  obtenerLatlong(Yeison){
    /*Yeison.forEach((val,index)=> {
      console.log('val.longitud');
    });*/
    Yeison.array.forEach((val,index)=> {
      console.log('val');
    });
  }
  
  async pedirReporte(id){
    return await axios.get('http://checkpointhackbo.azurewebsites.net/api/RegistroPuntoApp/'+String(id))
    .then(function (response){
      var y=response.data;  
      
      return y;

    })
    .catch(function (error) {
    console.log(error);
    });
  }
  async getMoviesFromApiAsync() {
    return await axios.get('http://checkpointhackbo.azurewebsites.net/api/PuntoControlApi')
  .then(function (response) {
    var y=response.data;    
    var x = [];
    y.forEach((val,index)=> {
      x[index]={pos: {latitude: val.latitud,
      longitude: val.longitud,},
      key : String(val.idPuntoControl),
      id:val.idPuntoControl}
      console.log(val.idPuntoControl);
      console.log(x[index].pos.longitude);
      console.log(x[index].pos.latitude);

    });
    
     return x;
    
  })
  .catch(function (error) {
    console.log(error);
  });
  }
async handleMarkerPress(event) {
  const markerID = event.nativeEvent.id;
  this.vaciarReporte();
  var x=await this.pedirReporte(markerID);
  //console.log('Id ',markerID,'  ',x);
  this.Mostrarmensaje(x);
}
vaciarReporte(){
  this.setState({
      reporte: [],
  });
}
Mostrarmensaje(x)
{
  x.forEach((val,index)=>{
      this.LLenarReporte(val);
    })
  // this.state.reporte.forEach((val,index)=>{
  //   console.log(val);
  //   })
  

}
  async onMapReady(){
    var x=await this.getMoviesFromApiAsync();
    //console.log(x.longitude);
    //this.Dibujar(x);
      x.forEach((val,index)=>{
      this.Dibujar(val);
    });
      
 
  
  }
   renderRow(x){
      return(
          <View>
            <Text>{x.fechaHora}</Text>
          </View>
      )
      
      
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
              key={marker.key}
              identifier={marker.key}
              onPress={(event)=>this.handleMarkerPress(event)}
              
              
            />
            
          ))}          
        
        </MapView>
         {this.state.reporte.map(reporte => (
            <Text>{reporte.fechaHora}</Text>            
              
              
              
          
            
          ))}          
      </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  
  containerFecha: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#4da2ab',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },  
  container1: {
    
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
   
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('Mapa', () => Mapa);
