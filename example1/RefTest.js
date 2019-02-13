import React from 'react'
import { Text, View, Image } from 'react-native';

export default class RefTest extends React.Component {  
    // state = {
    //     size: 80,
    // }

    //初始化state
    constructor(props) {
        super(props);
        this.state = {
            size: 80,
        }
    }

    getSize(){
        return this.state.size
    }

    render() {
        return (
            <View>
                <Text
                    style={{ fontSize: 20 }}
                    onPress={() => this.setState({ size: this.state.size + 10 })}
                >变大，变大</Text>
                <Text
                    style={{ fontSize: 20 }}
                    onPress={() => this.setState({ size: this.state.size - 10 })}
                >变小，变小</Text>
                <Image
                    style={{ width: this.state.size, height: this.state.size }}
                    source={require('../example1/qiqiu.png')}
                />
            </View>
        )
    }
}