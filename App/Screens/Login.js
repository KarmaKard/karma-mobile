'use strict'

var React = require('react-native')
var {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React

var Login = React.createClass({
  didPress() {
    this.props.didLogin()
  },
  render() {
    return (
      <Image style={styles.container} source={require('image!background-swirl')}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({input: text})}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({input: text})}
          password={true}
          placeholder='Password'
        />
        <TouchableOpacity onPress={this.didPress}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </Image>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: Image.resizeMode.contain,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 55,
    marginLeft: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    marginLeft: 10,
  }
})

module.exports = Login
