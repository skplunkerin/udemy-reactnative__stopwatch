import React, {
  Component
} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'
import initialState from './config/initial-state'
import Time from './components/time'
import Button from './components/button'

class StopWatch extends React.Component{
  constructor(props) {
    super(props)
    this._handleStartPress = this._handleStartPress.bind(this)
    this._handleLapPress = this._handleLapPress.bind(this)
    this.state = initialState()
    console.log('this.state:', this.state)
  }
  // Helper function to visually assist seeing sections of app
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

  render() {
    let startStyle = (this.state.running) ? styles.stopButton : styles.startButton
    return <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.timeWrapper]}>
          <Time time={formatTime(this.state.timeElapsed)} style={styles.timer} />
        </View>
        <View style={[styles.buttonWrapper]}>
          <Button style={[styles.button, startStyle]} text={this.state.startText} onPress={this._handleStartPress} />
          <Button style={styles.button} text="Lap" onPress={this._handleLapPress}/>
        </View>
      </View>
      <View style={[styles.footer]}>
        <View>
          {this.state.laps.map((time, index) => {
            return <View key={index} style={styles.lap}>
              <Text style={styles.lapText}>
                Lap #{index + 1}
              </Text>
              <Text style={styles.lapText}>
                {formatTime(time)}
              </Text>
            </View>
          })}
        </View>
      </View>
    </View>
  }
  _handleStartPress() {
    console.log('start press...pressed')
    if(this.state.running){
      clearInterval(this.interval)
      this.setState({
        running: false,
        startText: 'Start'
      })
      return
    }

    this.setState({startTime: new Date()})
    this.interval = setInterval( () => {
      // Update state with new value
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true,
        startText: 'Stop'
      })
    }, 30 )
  }
  _handleLapPress() {
    console.log('lap press...pressed')
    let lap = this.state.timeElapsed
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    })
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('stopwatch', () => StopWatch)
