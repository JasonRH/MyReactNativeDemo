import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { DrawerActions } from 'react-navigation';

export default class Page4 extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            // <View>
            //     <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 10 }}>Welcome to Page4</Text>
            //     <View style={{ margin: 10 }}>
            //         <Button title='Open Drawer' onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
            //     </View>
            //     <View style={{ margin: 10 }}>
            //         <Button title='Close Drawer' onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())} />
            //     </View>
            //     <View style={{ margin: 10 }}>
            //         <Button title='Toggle Drawer' onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())} />
            //     </View>
            // </View >

            <View>
                <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 10 }}>Welcome to Page4</Text>
                <View style={{ margin: 10 }}>
                    <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title='Close Drawer' onPress={() => navigation.closeDrawer()} />
                </View>
                <View style={{ margin: 10 }}>
                    <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
    }
})