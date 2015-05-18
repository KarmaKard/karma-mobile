'use strict'

var React = require('react-native')
var CategoryList = require('./CategoryList')

var {
  AlertIOS,
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Image,
  Text,
  View
} = React

var DealExplorer = React.createClass({
  render() {
    return (
      <NavigatorIOS
        ref="mainNav"
        style={styles.container}
        initialRoute={{
          component: CategoryList,
          title: 'KarmaKard',
          backButtonTitle: 'Back',
        }}
        tintColor="#FFFFFF"
        barTintColor="#000000"
        titleTextColor="#FFFFFF"/>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

module.exports = DealExplorer
