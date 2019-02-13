import React from 'react'
import { Text, View ,Button} from 'react-native'

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 25 ,textAlign:"center",marginBottom:20}}>登录页</Text>

                <Button 
                title='登录'
                onPress={()=>{
                    this.props.navigation.navigate('App');
                }}/>
            </View >
        )
    }
}