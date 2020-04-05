import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Main from './pages/Main'
import Profile from './pages/Profile'
import webView from './pages/webView'


const stackNavigator = createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevMap'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7d40e7',
            },
            headerTitleAlign:'center'
        },
    })

const RouteConfigs ={
    stack: {
        screen: stackNavigator,
        navigationOptions: {
        title: 'DevMap'
    }},
    webView: {
        screen: webView,
        navigationOptions: {
        title: 'Cadastro'
    }}
}
const TabNavigatorConfig ={
    style: {
      backgroundColor: 'blue',
    },
}
const tabNavigator = createAppContainer( createBottomTabNavigator(RouteConfigs, TabNavigatorConfig))


export default tabNavigator;