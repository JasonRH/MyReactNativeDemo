import React from 'react'
import { Text, View } from 'react-native'

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        //每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousStatus => {
                return { isShowingText: !previousStatus.isShowingText }
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        if (!this.state.isShowingText) {
            return null;
        }
        return(<Text>{this.props.text}</Text>);
    }
}

export default class BlinkApp extends React.Component {
    render() {
      return (
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
      );
    }
  }