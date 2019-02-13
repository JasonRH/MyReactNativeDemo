import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import Bannas from '../example/Bananas'
import BlinkApp from '../example/BlinkApp'

class HelloMessage extends Component {

  render() {
    let views = [];
    views.push(<Text>{this.props.name}</Text>);
    views.push(<Bannas />);
    views.push(<BlinkApp />);
    return views;
  }
}

export default HelloMessage;