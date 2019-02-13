import React from 'react'
import {View,Text} from 'react-native'

export default class LifecycleComponent extends React.Component {

    //完成组件初始化
    constructor(props) {
        super(props);
        console.log('----constructor-----');
        this.state = {
            count: 0,
        }
    }

    //组件被装载之前
    componentWillMount() {
        console.log('----componentWillMount-----');
    }
    //组件被装载之后
    componentDidMount() {
        console.log('----componentDidMount-----');
    }
    //接收到新的 props
    componentWillReceiveProps(nextProps) {
        console.log('----componentWillReceiveProps-----');
    }
    //在接收到新的 props 或者 state，将要渲染之前调用，询问是否更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log('----shouldComponentUpdate-----');
        return true;
    }
    //组件更新前
    componentWillUpdate(nextProps, nextState) {
        console.log('----componentWillUpdate-----');
    }
    //组件更新后
    componentDidUpdate(prevProps, prevState) {
        console.log('----componentDidUpdate-----');
    }
    //组件被移除前调用
    componentWillUnmount() {
        console.log('----componentWillUnmount-----');
    }

    render() {
        console.log('----render-----');
        return <View>
            <Text
                style={{ fontSize: 20, backgroundColor: 'red' }}
                onPress={() => { this.setState({ count: this.state.count + 1, }) }}
            >
                {this.props.name}
            </Text>
            <Text style={{ fontSize: 20 }}>被打{this.state.count}次</Text>
        </View>
    }
}
