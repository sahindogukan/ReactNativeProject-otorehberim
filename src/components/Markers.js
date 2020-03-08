import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Places from './Places';


const API_KEY = "YOUR_API_KEY" ;

export default class Markers extends Component {
   async componentDidMount() {
         const {params} = this.props.route;
         const {url} = params;
         try {
             const {coords:{longitude,latitude}} = await this.getCurrentPosition();
             this.setState(
                 {
                     region: {
                         ...this.state.region,
                         longitude: longitude,
                         latitude: latitude
                     }}
             );
             const {data: {results}} = await axios.get(`${url}&inputtype=textquery&fields=photos&location=${latitude},${longitude}&radius=50&key=${API_KEY}`);
             await this.setState(
                 {
                     places: results,
                     spinner: false
                 }
             );
         }catch (e) {
             alert("Konum algılanamadı. İnternet bağlantınızı veya konum ayarlarınızı kontrol edin.")
         }
    }

    state={
        region: {
            latitude: 20.0387,
            longitude: 20.0748,
            latitudeDelta: 0.0002,
            longitudeDelta: 0.030,
            error:"",
        },
        places: [],
        spinner: true,
    };

getCurrentPosition(){
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            info=>resolve(info),
            ()=>reject(),
            {
                timeout:5000
            })
    })
};
  render() {
      const spinner = this.state.spinner;
    return (
      <View style={styles.container}>
          {spinner ? <ActivityIndicator style={styles.spinner} size={"large"}/> :
              <MapView style={styles.map}
                       region={this.state.region}
                       ref = {(ref)=>this.mapView=ref}
                       showsUserLocation={true}
                       loadingEnabled={true}
              >

                  {
                      this.state.places.map( place => {
                          const {geometry: {location: {lat, lng}}} = place;
                          return(
                              <Marker
                                  key={place.id}
                                  coordinate={{latitude:lat, longitude:lng}}
                                  title={place.name}
                                  image={require("../assets/m-auto200.png")}
                              />
                          )
                      })
                  }

              </MapView>
          }
          <View style={styles.placesContainer}>
              <Places map={this.mapView} apiKey={API_KEY} places={this.state.places}/>
          </View>

      </View>
    );
  }
}


const styles = StyleSheet.create(
    {
        container:
            {
                flex:1
            },
        map:
            {
                flex:1
            },
        placesContainer:
            {
                position: "absolute",
                width: "100%",
                left: 0,
                bottom: 0
            }
    }
);
