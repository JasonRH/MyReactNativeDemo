import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, } from 'react-native'

export default class HomePage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to HomePage</Text>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Page1'} onPress={() => {
                        navigation.navigate('Page1', { name: '动态的' })
                    }} />
                </View>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Page2'} onPress={() => { navigation.navigate('Page2') }}></Button>
                </View>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Page3'} onPress={() => { navigation.navigate('Page3', { title: 'Devio' }) }} />
                </View>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Bottom Navigator'} onPress={() => { navigation.navigate('Bottom') }} />
                </View>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Top Navigator'} onPress={() => { navigation.navigate('Top') }} />
                </View>

                <View style={{ margin: 10 }}>
                    <Button title={'Go to Drawer Navigator'} onPress={() => { navigation.navigate('Drawer') }} />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
});