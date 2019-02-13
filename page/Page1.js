import React from 'react'
import { Button, Text, View } from 'react-native'

export default class Page1 extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Text style={{ fontSize: 25 ,textAlign:"center"}}>Welcome to Page1</Text>
                <View style={{margin:10}}>
                <Button title={'Go Back'} onPress={() => { navigation.goBack() }}></Button>
                </View>
                <View style={{margin:10}}>
                <Button title={'跳转到页面2'} onPress={() => { navigation.navigate('Page2') }}></Button>
                </View>
            </View >
        )
    }
}