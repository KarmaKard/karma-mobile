'use strict'

var React = require('react-native')
var Deal = require('./Deal')

var {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React

var DEALS = [
  { name: 'Free Thing' },
  { name: '50% Off Something Else' },
  { name: 'Buy One Thing Get Another Free' },
]

var DealList = React.createClass({
  getInitialState() {
    return {
      deals: DEALS || []
    }
  },

  showDeal(deal) {
    this.props.navigator.push({
      component: Deal,
      title: deal.name,
      passProps: {
        deal
      }
    })
  },

  renderDeal(deal, index) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this.showDeal(deal) }}
        key={index}>
        <View key={index} style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{deal.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    console.log('DealList', this.props.business)
    return (
      <ScrollView style={styles.scrollView}>
        {this.state.deals.map((deal, i) => this.renderDeal(deal, i))}
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

module.exports = DealList
