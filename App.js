/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HelloMessage from './example/HelloMessage'
import Bannas from './example/Bananas'
import HelloComponent from './example1/HelloComponent'
import LifecycleComponent from './example1/LifecycleComponent'
import EIComponent, { name, age, sum } from './example1/EIComponent'
import PropsTest from './example1/PropsTest'
import StateTest from './example1/StateTest'
import RefTest from './example1/RefTest'
import Student from './example1/Student'
import MingStudent from './example1/MingStudent'
import FlexBox from './example1/FlexBox'



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      remove: true,
      result: '',
      size: 0,
    })

    //类实例化
    this.stu = new Student('小红', '女', 16);
    this.ming = new MingStudent();
  }

  render() {
    var myview = this.state.remove ? null : <LifecycleComponent name='有本事你打我啊' />;
    var text = this.state.remove ? '让他复活' : '移除他';
    var params = {
      name1: '小明',
      age1: 18,
      sex1: '男',
    }
    var { name1, sex1 } = params;
    return (
      <View style={styles.container}>
        {myview}

        {/* 生命周期 */}
        <Text style={{ fontSize: 20 }} onPress={() => { this.setState({ remove: !this.state.remove }) }}>{text}</Text>

        {/* 导入导出 */}
        <Text style={styles.text}>名字：{name}</Text>
        <Text style={styles.text}>年龄：{age}</Text>
        <Text style={styles.text}
          onPress={() => {
            var result = sum(2, 3);
            this.setState({
              result: result,
            })
          }}>2+3={this.state.result}</Text>


        {/* props的使用 ,延展操作符*/}
        <PropsTest
          {...params}
        //name1={name1}
        //sex1={sex1}
        />

        {/* state的使用 */}
        {/* <StateTest /> */}

        {/* ref使用详解 */}
        <Text style={styles.text}
          onPress={() => {
            //var size = this.refs.reftest.getSize();
            var size = this.refs['reftest'].getSize();
            //var size = this.reftest.getSize();
            this.setState({
              size: size
            })
          }}>获取气球大小:{this.state.size}</Text>
        <RefTest
          ref="reftest"
        //ref={reftest=>this.reftest=reftest}
        />
        {/* 获取类实例 */}
        <Text style={styles.text}>获取类实例：{this.stu.getDescription()}</Text>
        <Text>小明实例：{this.ming.getDescription()}</Text>

        <FlexBox />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    color: '#333333',
    textAlign: 'center',
  }
});
