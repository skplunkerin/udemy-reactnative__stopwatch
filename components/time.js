import React, {
  Component
} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class Time extends Component{
  render() {
    return <Text style={this.props.style}>
      {this.props.time}
    </Text>
  }
}

export default Time
