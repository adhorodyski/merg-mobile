import React, { PureComponent } from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationActions
} from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import HomeScreen, { Icon } from './src/components/Home/Home'
import ExploreScreen from './src/components/Explore/Explore'
import ProfileScreen from './src/components/Profile/Profile'
import SettingsScreen from './src/components/Settings/Settings'
const MergeIcon = require('./assets/branding/logo-short-colors.png')
const HomeIcon = require('./assets/home.png')
const ExploreIcon = require('./assets/explore.png')
const ProfileIcon = require('./assets/profile.png')
const SettingsIcon = require('./assets/settings.png')

const StyledTouchable = styled.TouchableOpacity`
width: 40px;
height: 40px;
margin: 0 10px;
`

const HeaderButton = styled.Image`
height: 30px;
width: 30px;
margin: auto;
`

const MainNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon source={HomeIcon} />
      )
    }
  },
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon source={ExploreIcon} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon source={ProfileIcon} />
      )
    }
  },
}, {
  defaultNavigationOptions: {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: '#FFFFFF'
      },
      style: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      }
    }
  }
})

const StackNavigator = createStackNavigator({
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName,
        headerTitleStyle: {
          fontSize: 20
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.03,
          shadowRadius: 3
        },
        headerLeft: (
          <StyledTouchable>
            <HeaderButton
              source={MergeIcon} />
          </StyledTouchable>
        ),
        headerRight: (
          <StyledTouchable
            onPress={() => {
              const pushAction = StackActions.push({
                routeName: 'Settings'
              })
              navigation.dispatch(pushAction)
            }}>
            <HeaderButton
              source={SettingsIcon} />
          </StyledTouchable>
        )
      }
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerTitleStyle: {
          fontSize: 20
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(51, 51, 51, 0.1)'
        }
      }
    }
  }
})

const Navigation = createAppContainer(StackNavigator)

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
