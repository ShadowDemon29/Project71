import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createBottomAppContainer} from 'react-navigation'
import WriteStoryScreen from '../screens/WriteStoryScreen'
import ReadStoryScreen from '../screens/ReadStoryScreen'
import db from '../config'
import firebase from 'firebase'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
