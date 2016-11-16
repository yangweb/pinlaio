/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

let APP_URL = 'http://c.guapin.com/app/';

export default class Pinla extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <WebView style={styles.webView_w}
          source={{uri:APP_URL}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
        >
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    webView_w:{
      backgroundColor:'#FFF',
    }
});

AppRegistry.registerComponent('Pinla', () => Pinla);
