import React, { PureComponent } from 'react'
import store from './src/store'
import { Provider, connect } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  StackActions
} from 'react-navigation'
import { View, Image, TouchableOpacity } from 'react-native'
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
import GreetingAvatar from './src/components/Shared/GreetingAvatar'
const MergeIcon = require('./assets/branding/logo-short-colors.png')
const SettingsIcon = require('./assets/settings.png')

const StyledTouchable = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  margin: 0 10px;
`

const HeaderIoniconsButton = styled(Ionicons)`
  margin: auto;
`

const HeaderButton = styled.Image`
  height: 25px;
  width: 25px;
  margin: auto;
`

const FlexView = styled.View`
  display: flex;
  flex-direction: row;
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
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-infinite"
          size={26}
          color={tintColor} />
      )
    }
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-search"
          size={26}
          color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-person"
          size={26}
          color={tintColor} />
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
      activeTintColor: '#333333',
      inactiveTintColor: '#808080',
      pressColor: '#F0F0F0',
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
      return {
        gesturesEnabled: true,
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          height: 40,
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackTitle: null,
        headerLeft: (
          <StyledTouchable>
            <HeaderButton
              source={MergeIcon} />
          </StyledTouchable>
        ),
        headerRight: (
          <FlexView>
            <StyledTouchable
              onPress={() => {
                const pushAction = StackActions.push({ routeName: 'Settings' })
                navigation.dispatch(pushAction)
              }}>
              <HeaderIoniconsButton
                name="ios-more"
                size={30}
                color={'#808080'} />
            </StyledTouchable>
            <StyledTouchable
              onPress={() => {
                navigation.navigate({ routeName: 'Profile' })
              }}>
              <GreetingAvatar />
            </StyledTouchable>
          </FlexView>
        )
      }
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Settings',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
      }
    }
  }
})

const AuthStack = createStackNavigator({
  PrimaryChoice: {
    screen: PrimaryChoiceScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackTitle: null,
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        ),
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
        gesturesEnabled: true,
        headerTitle: 'Sign in',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
      }
    }
  },
  FollowerRegister: {
    screen: FollowerRegisterScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Follower',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
      }
    }
  },
  CreatorRegister: {
    screen: CreatorRegisterScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Creator',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
      }
    }
  }
})

const MergingStack = createStackNavigator({
  Merging: {
    screen: MergingScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Merging',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackTitle: null,
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
      }
    }
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Welcome',
        headerTitleStyle: {
          fontSize: 16
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={'#808080'} />
          </StyledTouchable>
        )
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
