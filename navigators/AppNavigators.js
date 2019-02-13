import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems, SafeAreaView, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import { Button, Platform, ScrollView } from 'react-native'
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page4 from '../page/Page4'
import Page5 from '../page/Page5'
import Login from '../page/Login'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AppBottomNavigator = createBottomTabNavigator({

    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => {
                return <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{ color: tintColor }} />;
            }
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => {
                return <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{ color: tintColor }} />
            }
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => {
                return <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{ color: tintColor }} />
            }
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => {
                return <Ionicons
                    name={'ios-aperture'}
                    size={26}
                    style={{ color: tintColor }} />
            }
        }
    },
},
    {
        tabBarOptions: {
            //根据运行平台确定颜色
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#0099FF',
            labelStyle: {
                fontSize: 15,
            },
        }

    })

const AppTopNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'iOS'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            tabBarLabel: 'React Native'
        }
    },
},
    {
        tabBarOptions: {
            tabStyle: { mindWidth: 100, width: 150 },
            upperCaseLabel: false,//是否使标签大写，默认为true
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            style: {
                backgroundColor: '#678'//TabBar的背景色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white'
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            }//文字样式
        }
    })

const DrawerNavigator = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({ tintColor }) => {
                return <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{ color: tintColor }}
                />
            }
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: 'Page5',
            drawerIcon: ({ tintColor }) => {
                return <MaterialIcons
                    name={'move-to-inbox'}
                    size={24}
                    style={{ color: tintColor }}
                />
            }
        }
    },
}, {
        initialRouteName: 'Page4',
        contentOptions: {
            activeTintColor: '#808080',
        },
        contentComponent: (props) => (
            <ScrollView style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItems {...props} />
                </SafeAreaView>
            </ScrollView>
        )
    })
const AppStack = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.name + '页面名' //动态配置navigationOptions
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {//在这里定义每个页面的导航数据，静态配置
            title: 'This is Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const { navigation } = props;
            const { state, setParams } = navigation;
            const { params } = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {//在这里定义每个页面的导航数据，静态配置
            title: 'This is Page4'
        }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator'
        }
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'TopNavigator'
        }
    },
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: {
            title: 'This is DrawerNavigator'
        }
    },
},
)

const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    },
}, {
        navigationOptions: {
            //header:null,  //可以通过将header设为null来禁用StackNavigator的Navigation Bar
        }
    })

export const AppNavigator = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
}, {
        initialRouteName: 'Auth'
    })