// let React = require('react-native');
// let {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } = React;
import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './components/button'
import Time from './components/time'

var StopWatch = React.createClass({
  render: function() {
    return <View>
      <Time />
      <Button text="Start" />
      <Button text="Lap" />
    </View>
  }
})

AppRegistry.registerComponent('stopwatch', () => StopWatch);
