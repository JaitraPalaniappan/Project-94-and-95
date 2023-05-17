import React, { Component } from 'react';
import {View, Text, SafeAreaView, Platform, StyleSheet} from 'react-native';

export default class DeleteSpaceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <Text>Delete Space Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2BF4FF',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
 
});
