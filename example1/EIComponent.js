import React from 'react'

//导入与导出

var name = '小明';
var age = '22';

export { name, age };

export default class EIComponent extends React.Component {
    render() {
    }
}

export function sum(a,b){
    return a+b;
}