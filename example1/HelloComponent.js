import React from 'react'
import { Text, View } from 'react-native'

export default class HelloComponent extends React.Component {
    render() {
        return <Text style={{ fontSize: 20, backgroundColor: 'red' }}>{this.props.name}</Text>
    }
}
