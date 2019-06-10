import React, { PureComponent } from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  StackActions
} from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

import PrimaryChoiceScreen from './src/components/Auth/PrimaryChoice'
import SignInScreen from './src/components/Auth/SignIn'
import FollowerRegisterScreen from './src/components/Auth/FollowerRegister'
import CreatorRegisterScreen from './src/components/Auth/CreatorRegister'
import MergingScreen from './src/components/Merging/Merging'
import WelcomeScreen from './src/components/Merging/Welcome'
import HomeScreen, { Icon } from './src/components/Home/Home'
import ExploreScreen from './src/components/Explore/Explore'
import ProfileScreen from './src/components/Profile/Profile'
import HomeProfileScreen from './src/components/Profile/HomeProfile'
import ExploreProfileScreen from './src/components/Profile/ExploreProfile'
import SettingsScreen from './src/components/Settings/Settings'
const MergeIcon = require('./assets/branding/logo-short-colors.png')
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

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  ProfileOverlay: {
    screen: HomeProfileScreen,
    navigationOptions: {
      header: null
    }
  }
})

const ExploreStack = createStackNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      header: null
    }
  },
  ProfileOverlay: {
    screen: ExploreProfileScreen,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-home"
          size={25}
          color="#000" />
      )
    }
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-compass"
          size={25}
          color="#000" />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-contact"
          size={25}
          color="#000" />
      )
    }
  }
}, {
  defaultNavigationOptions: {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    optimizationsEnabled: true,
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        display: 'none'
      },
      tabStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      }
    }
  }
})

const AppStack = createStackNavigator({
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName,
        headerTitleStyle: {
          fontSize: 16
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
        headerBackTitle: null,
        headerRight: (
          <StyledTouchable
            onPress={() => {
              const pushAction = StackActions.push({ routeName: 'Settings' })
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

const AuthStack = createStackNavigator({
  PrimaryChoice: {
    screen: PrimaryChoiceScreen,
    navigationOptions: ({ navigation }) => {
      return {
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
      }
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Sign in',
        headerTitleStyle: {
          fontSize: 20
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(51, 51, 51, 0.1)'
        }
      }
    }
  },
  FollowerRegister: {
    screen: FollowerRegisterScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Follower',
        headerTitleStyle: {
          fontSize: 20
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(51, 51, 51, 0.1)'
        }
      }
    }
  },
  CreatorRegister: {
    screen: CreatorRegisterScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Creator',
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

const MergingStack = createStackNavigator({
  Merging: {
    screen: MergingScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Merging',
        headerTitleStyle: {
          fontSize: 20
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(51, 51, 51, 0.1)'
        }
      }
    }
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Welcome',
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

const Stacks = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    Merging: MergingStack,
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
))

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Stacks />
      </Provider>
    )
  }
}

export default App
