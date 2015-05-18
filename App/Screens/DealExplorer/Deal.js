'use strict'

var React = require('react-native')
var {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React

var Deal = React.createClass({
  render() {
    console.log('Deal', this.props.deal.name)
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.dealText}>Deal: {this.props.deal.name}</Text>
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  dealText: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000'
  }
})

module.exports = Deal
