import React from 'react'
import { Text, View } from 'react-native';
//需要单独安装npm i prop-types --save
import PropTypes from 'prop-types'

export default class PropsTest extends React.Component {
    //默认属性
    static defaultProps = {
        name1: '小红',
        age1: 16,
    }
    static propTypes = {
        name1: PropTypes.string,
        age1:PropTypes.number,
        //性别必须要传值
        sex1:PropTypes.string.isRequired,
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, backgroundColor: 'red' }}>姓名：{this.props.name1}</Text>
                <Text style={{ fontSize: 20, backgroundColor: 'red' }}>年龄：{this.props.age1}</Text>
                <Text style={{ fontSize: 20, backgroundColor: 'red' }}>性别：{this.props.sex1}</Text>
            </View>
        )
    }
}