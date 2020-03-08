import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Markers from './src/components/Markers';
import Home from './src/components/Home';

const Stack = createStackNavigator();

function LogoTitle() {
    return (
        <View style={{flexDirection:"row"}}>
            <Image style={{width:30, height:30, marginHorizontal:5}} source={require("./src/assets/logo.png")}/>
            <Text style={{color:"#0053ee", fontWeight: "bold", fontSize:25}}>otorehberim</Text>
        </View>

    );
}

export default class App extends Component {
  render() {
    return (
            <NavigationContainer>
                <Stack.Navigator screenOptoions={{headerTitleAlign:"center"}}>
                    <Stack.Screen name="Home"
                                  component={Home}
                                  options={{
                                      headerTitle: props => <LogoTitle {...props}/>
                                  }}
                    />
                    <Stack.Screen name="Map"
                                  component={Markers}
                                  options={({route}) => ({
                                      title: route.params.title,
                                  })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
  }
}

const styles = StyleSheet.create({});
