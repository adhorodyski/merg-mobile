import React, { PureComponent } from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen, { Icon } from './src/components/Home/Home'
import ExploreScreen from './src/components/Explore/Explore'
import ProfileScreen from './src/components/Profile/Profile'
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

const Navigation = createAppContainer(MainNavigator)

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
