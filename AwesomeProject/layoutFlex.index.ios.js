import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/* You think this is bad. Go look at this hell shit hole
https://facebook.github.io/react-native/docs/layout-props.html
*/

class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.

      /* Setting the parent viwe to flexDirection = row means all children will be
      on the same row, each of them serving as a seperate column
      */
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        {/* This is the left half/ first column out of the root parent row */ }
        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}>
          {/* This is the top half/ first row out of the left parent column */ }
          {/*justifyContent sets distribution of children along primary-axis primary-axis is setup by flexDirection. */}
          { /* alignItems sets distribution of children along secondary-axis secondary-axis is setup by opposite of flexDirection */}
          <View style={{
            flex: 1,
            backgroundColor: 'rebeccapurple',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 100}} />
          </View>

          {/* This is the bottom half/ second row out of the left parent column */ }
          <View style={{
            flex: 1,
            backgroundColor: 'black',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 100}} />
        </View>
      </View>

        {/* This is the right half/ second column out of the root parent row */ }
        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}>
          {/* This is the top half/ first row out of the right parent column */ }
          <View style={{
            flex: 1,
            backgroundColor: 'blue',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end'
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 100}} />
        </View>

          {/* This is the bottom half/ second row out of the right parent column */ }
          <View style={{
            flex: 1,
            backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'green', borderRadius: 100}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red', borderRadius: 100}} />
        </View>

      </View>
    </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
