import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  StackActions
} from 'react-navigation'
import { View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled, { ThemeProvider } from 'styled-components/native'
import { palette } from './src/components/Shared/palette'

import {
  HeaderIoniconsButton,
  StyledTouchable
} from './src/components/Shared/UI'
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
import DarkModeSwitch from './src/components/Shared/DarkModeSwitch'
const MergeIcon = require('./assets/branding/logo-short-colors.png')

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
  defaultNavigationOptions: ({ screenProps }) => {
    return {
      swipeEnabled: true,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      optimizationsEnabled: false,
      lazy: true,
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          display: 'none'
        },
        activeTintColor:
          screenProps === 'dark'
          ? `${palette.lightGray}`
          : `${palette.darkText}`,
        inactiveTintColor:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.lightText}`,
        pressColor: `${palette.lightGray}`,
        tabStyle: {
          backgroundColor: 'transparent'
        },
        style: {
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
          shadowColor:
            screenProps === 'dark'
            ? `${palette.white}`
            : `${palette.black}`,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3
        }
      }
    }
  }
})

const AppStack = createStackNavigator({
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          height: 40,
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`
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
                color={`${palette.lightText}`} />
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
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Settings',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
          </StyledTouchable>
        ),
        headerRight: (
          <DarkModeSwitch />
        )
      }
    }
  }
})

const AuthStack = createStackNavigator({
  PrimaryChoice: {
    screen: PrimaryChoiceScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackTitle: null,
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
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
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Sign in',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
          </StyledTouchable>
        )
      }
    }
  },
  FollowerRegister: {
    screen: FollowerRegisterScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Follower',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
          </StyledTouchable>
        )
      }
    }
  },
  CreatorRegister: {
    screen: CreatorRegisterScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Creator',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
          </StyledTouchable>
        )
      }
    }
  }
})

const MergingStack = createStackNavigator({
  Merging: {
    screen: MergingScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Merging',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackTitle: null,
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
          </StyledTouchable>
        )
      }
    }
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        gesturesEnabled: true,
        headerTitle: 'Welcome',
        headerTitleStyle: {
          fontSize: 16,
          color:
          screenProps === 'dark'
          ? `${palette.lightText}`
          : `${palette.darkText}`
        },
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor:
            screenProps === 'dark'
            ? `${palette.black}`
            : `${palette.white}`,
        },
        headerBackImage: (
          <StyledTouchable onPress={() => navigation.goBack() }>
            <HeaderIoniconsButton
              name="ios-arrow-round-back"
              size={40}
              color={`${palette.lightText}`} />
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

class ThemedStacks extends PureComponent {
  render() {
    const { isDarkValue } = this.props
    const themeMode = isDarkValue ? 'dark' : 'light'

    return (
      <ThemeProvider theme={{ mode: themeMode }}>
        <Stacks screenProps={ themeMode } />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  isDarkValue: state.settings.general.isDarkValue
})

export default connect(mapStateToProps)(ThemedStacks)
