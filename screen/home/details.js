//This is an example code for StatusBar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, StatusBar } from 'react-native';
// import all basic components

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#00BCD4"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <Text> Status Bar Example </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
