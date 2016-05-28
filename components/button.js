import React, {
  Component
} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

class Button extends Component {
  render() {
    return <TouchableHighlight onPress={()=>{}} underlayColor="gray">
      <Text>
        { this.props.text }
      </Text>
    </TouchableHighlight>
  }
}

export default Button
