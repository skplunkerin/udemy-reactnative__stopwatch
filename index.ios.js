import React, {
  Component
} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import InitialState from './config/initial-state'
import Time from './components/time'
import Button from './components/button'

class StopWatch extends React.Component{
  constructor(props) {
    super(props)
    this.state = InitialState
  }
  // Helper function to visually assist seeing sections of app
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

  render() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timeWrapper, this.border('red')]}>
          <Time />
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          <Button text="Start" onPress={this._handleStartPress} />
          <Button text="Lap" onPress={this._handleLapPress}/>
        </View>
      </View>
      <View style={[styles.footer,this.border('blue')]}>
        <Text>
          TODO: list of laps
        </Text>
      </View>
    </View>
  }
  _handleStartPress() {
    console.log('start press...pressed')
  }
  _handleLapPress() {
    console.log('lap press...pressed')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch' // Each child element to take as much space as can (height)
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timeWrapper: { // Red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around', // equally distribute children in space given
    alignItems: 'center' // equally distribute children in space given
  }
})

AppRegistry.registerComponent('stopwatch', () => StopWatch)
