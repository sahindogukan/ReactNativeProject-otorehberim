import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class PlaceBox extends Component {
    getPlace = ()=>
    {
        const {lat,lng} = this.props.item.geometry.location;
        const region = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        };
        try {
            this.props.map.animateToRegion(region,0);
        }catch (e) {
            alert(e.toString())
        }
    };

  render() {
      const apiKey = this.props.api;
      const {photos} = this.props.item;
      let url;
      if (photos) {
        url = {uri:`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${apiKey}`}
      }else{
          url = require("../assets/imgnotfound.png")
      }
    return (
      <TouchableOpacity onPress={this.getPlace} >
          <View style={styles.container}>
              <Text numberOfLines={1} style={styles.placeText}>{this.props.item.name}</Text>
              <Image source={url} style={styles.img}/>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create(
    {
        container:
            {
                flex:1,
                marginVertical:5,
                marginHorizontal:5,
                height: 140,
                width: 200,
                borderRadius: 10,
                borderWidth: 1,
                padding: 7,
                backgroundColor:"white"
            },
        placeText:
            {
                fontSize: 17,
                fontWeight:"bold",
                color:"#0053EE"
            },
        img:
            {
                flex:1,
                width: "100%",
                height: 140,
                justifyContent:"center",
                alignItems:"center",
                marginVertical: 2,
                borderRadius: 10
            }
    }
    );
