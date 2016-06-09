import {
  StyleSheet
} from 'react-native'

export default function() {
  return StyleSheet.create({
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
}
