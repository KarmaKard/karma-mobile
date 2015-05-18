'use strict'

var React = require('react-native')
var BusinessList = require('./BusinessList')

var {
  ActivityIndicatorIOS,
  ActionSheetIOS,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React

var CATEGORIES = [
  { title: 'Restaurants' },
  { title: 'Automotive' },
  { title: 'Lawn Care' },
  { title: 'Financial' },
]

var CategoryList = React.createClass({
  getInitialState() {
    return {
      categories: CATEGORIES || []
    }
  },

  showBusinesses(category) {
    this.props.navigator.push({
      component: BusinessList,
      title: category.title,
    })
  },

  renderCategory(cat, i) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this.showBusinesses(cat) }}
        key={i}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{cat.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  },

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.state.categories.map((cat, i) => this.renderCategory(cat, i))}
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

module.exports = CategoryList
