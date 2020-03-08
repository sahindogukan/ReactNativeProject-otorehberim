import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PlaceBox from './PlaceBox';


export default class Places extends Component {
  render() {
    return (
        <FlatList  data={this.props.places}
                   renderItem={({item})=><PlaceBox map={this.props.map} api={this.props.apiKey} item={item}/>}
                   horizontal={true}
                   keyExtractor={item=>item.id.toString()}
        />
    );
  }
}

const styles = StyleSheet.create({});
