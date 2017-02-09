/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* Import / Export / Modules
* Links:
* http://exploringjs.com/es6/ch_modules.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
*
* Modules are stored in files. One module per file and one file per module
* Two Types of Export
* Named: Can export several different values. When importing that file/module, one can reference all those seperate values using the same names
* Default: Only a single default export per module. This value is considered to be the "main" part of that particular file, since it is the only thing being exported
*
* Used to IMPORT functions, objects, or primitives that have been EXPORTED in a seperate module elsewhere
*

/
* This double import is essentially importing the "main" functionality that is exported
* From the module 'react' (exported by saying export default 'something') as well as importing
* a named value that is also exported from the module 'react' (expoted by saying export function Component)
* Something like (old import/export style, i think?):
* const React = import('react')
* const Component = React.Component
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
  /*
  * https://facebook.github.io/react/docs/react-component.html
  * Whenever implementing a constructor for a custom component, call super(props) first
  * constructor is the right place to initialize state.
  * If you don't need to initialize state or bind methods, you don't need to extend the constructor
   */
  constructor(props) {
    super(props);
    this.state = {showStuff: true};

    setInterval(() => {
      this.setState({ showStuff: !this.state.showStuff});
    }, 3000);
  }
  /*
  * Shoud return a single React element. Reads this.state and this.props, returns element
  * Should be pure: Shold not modify state, and should return the same result everytime it is called
  */
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
