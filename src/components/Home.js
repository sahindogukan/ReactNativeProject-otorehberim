import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import newArrowCheck from "@babel/runtime/helpers/esm/newArrowCheck";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.row1}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map", {title:"Tamir/Bakım",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=oto%20tamir"})}}
                                style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/oto_tamir.png')}/>
                  <Text style={styles.text}>Tamir/Bakım</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map",{title:"Yedek Parça",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=oto%20yedek%20parça"})}}
                                style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/yedek_parca.png')}/>
                  <Text style={styles.text}>Yedek Parça</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.row2}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map",{title:"Benzin İstasyonu",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=benzin%20istasyonu"})}}
                                style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/benzin_istasyonu.png')}/>
                  <Text style={styles.text}>Benzin İstasyonu</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map",{title:"Oto Yıkama",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=oto%20yıkama"})}} style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/oto_yıkama.png')}/>
                  <Text style={styles.text}>Oto Yıkama</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.row3}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map",{title:"Elektrik Şarj İstasyonu",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=elektrik%20şarj"})}} style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/elektrik_istasyonu.png')}/>
                  <Text style={styles.text}>Elektrik Şarj İstasyonu</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Map",{title:"Oto Ekspertiz",
                  url:"https://maps.googleapis.com/maps/api/place/textsearch/json?query=oto%20ekspertiz"})}} style={styles.rowElement}>
                  <Image style={styles.image} source={require('../assets/oto_expertise.png')}/>
                  <Text style={styles.text}>Oto Ekspertiz</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                backgroundColor: "white",
                margin: 2
            },
        row1:
            {
                flex: 1,
                flexDirection: "row",
        },
        row2:
            {
                flex: 1,
                flexDirection: "row",
        },
        row3:
            {
                flex: 1,
                flexDirection: "row",
            },
        rowElement:{
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#6d85ee",
                flex:1,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
                borderRadius: 10,
                margin: 5
        },
        image:
            {
                height: 50,
                width: 50
            },
        text:
            {
                fontSize: 20,
                textAlign:"center",
                marginVertical: 15,
                fontWeight: "bold",
                color: "white"
            }

    }
    );
