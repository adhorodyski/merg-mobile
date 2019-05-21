import React from 'react'
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen, { Icon } from './src/Home/Home'
import ExploreScreen from './src/Explore/Explore'
import ProfileScreen from './src/Profile/Profile'
const HomeIcon = require('./assets/home.png')
const ExploreIcon = require('./assets/explore.png')
const ProfileIcon = require('./assets/profile.png')

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
        backgroundColor: '#333333'
      },
      style: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderTopColor: 'rgba(51, 51, 51, 0.1)'
      }
    }
  }
})

const Navigation = createAppContainer(MainNavigator)

class App extends React.Component {
  render() {
    return <Navigation />
  }
}

export default App
