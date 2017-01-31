/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class Cage extends Component{
  constructor(props) {
    super(props);
    this.state = {showStuff: true};

    setInterval(() => {
      this.setState({ showStuff: !this.state.showStuff});
    }, 3000);
  }
  render() {
    if(this.state.showStuff){
    return(
      <View>
      <Text>This is Nick Cage from {this.props.year}!</Text>
      <Image source={{uri: this.props.url}} style={{width: 193, height:110}}/>
      </View>
    );
  } else{
    return(
      <View>
      </View>
    );
  }
}
}

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Cage year='1994' url='https://i.ytimg.com/vi/G8GVWhviw8s/hqdefault.jpg'/>
        <Cage year='1995' url='https://i.ytimg.com/vi/G8GVWhviw8s/hqdefault.jpg'/>
        <Cage year='1995'/>
      </View>

    );
  }
}

const pic = {
  uri: 'https://i.ytimg.com/vi/G8GVWhviw8s/hqdefault.jpg'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
