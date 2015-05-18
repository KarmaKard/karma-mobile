'use strict'

var React = require('react-native')
var DealExplorer = require('./App/Screens/DealExplorer')
var Login = require('./App/Screens/Login')

var {
  AlertIOS,
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  StyleSheet,
  Image,
  Text,
  View
} = React

var KarmaMobile = React.createClass({
  getInitialState() {
    return {
      authenticated: false
    }
  },

  didLogin() {
    this.setState({ authenticated: true })
  },

  render() {
    var component = this.state.authenticated
      ? <DealExplorer />
      : <Login didLogin={this.didLogin} />
    return component
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('KarmaMobile', () => KarmaMobile)
