'use strict'

var React = require('react-native')
var DealList = require('./DealList')

var {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React

var BUSINESSES = [
  { name: 'The Karma Company' },
  { name: 'A Good Construction Company' }
]

var BusinessList = React.createClass({
  getInitialState() {
    return {
      businesses: BUSINESSES || []
    }
  },

  showDeals(business) {
    this.props.navigator.push({
      component: DealList,
      title: business.name,
      passProps: {
        business
      }
    })
  },

  renderBusiness(business, index) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this.showDeals(business) }}
        key={index}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{business.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.state.businesses.map((biz, i) => this.renderBusiness(biz, i))}
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
})

module.exports = BusinessList 
