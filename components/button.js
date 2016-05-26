import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Button = React.createClass({
  render: function() {
    return <View>
      <Text>
        { this.props.text }
      </Text>
    </View>
  }
})

module.exports = Button
