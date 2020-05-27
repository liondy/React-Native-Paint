/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

export default class App extends Component{
  resetSign() {
    this.refs["sign"].resetImage();
  }
  render(){
    return(
      <>
        <SignatureCapture
          style={{flex:1}}
          ref="sign"
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={"portrait"}
        />
        <TouchableHighlight
          style={styles.btnReset}
          onPress={() => this.resetSign()} >
            <Text style = {styles.teks}>RESET</Text>
        </TouchableHighlight>
      </>
    );
  }
}

const styles = StyleSheet.create({
  btnReset: {
    justifyContent: "center", 
    alignItems: "center",
    padding: 10,
    backgroundColor: 'grey',
    height: '10%'
  },
  teks: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
