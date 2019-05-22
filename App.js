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
import { Image, TouchableHighlight } from 'react-native'
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
        backgroundColor: '#F5F5F5'
      },
      style: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderTopColor: 'rgba(51, 51, 51, 0.1)'
      }
    }
  }
})

const StyledTouchable = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  margin: 0 10px;
`

const HeaderButton = styled.Image`
  height: 30px;
  width: 30px;
  margin: auto;
`

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
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(51, 51, 51, 0.1)'
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
              console.log('take be to the Settings tab!')
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
