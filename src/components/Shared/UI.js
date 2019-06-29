import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import styled from 'styled-components'
import posed from 'react-native-pose'
import { Ionicons } from '@expo/vector-icons'
import { palette } from './palette'
import * as theme from './themes'

// WRAPPERS

export const Main = styled.ScrollView`
  background: ${theme.baseBackgroundColor};
  padding-top: 10px;
`

export const MainView = styled.View`
  background: ${theme.baseBackgroundColor};
`

export const StyledView = styled.View`
  width: 95%;
  margin: 0 auto;
`

export const EmptyFlatlistTemplate = styled.View`
  background: ${theme.baseBackgroundColor};
  height: ${Dimensions.get('window').height};
`

export const ResultsFlatlist = styled.FlatList`
  background: ${theme.baseBackgroundColor};
`

export const StyledViewMargin = styled(StyledView)`
  margin: 10px auto;
`

export const StyledViewMargin2 = styled(StyledView)`
  margin: 10px auto 40px auto;
`

export const Tile = styled.View`
  width: 100%;
  min-height: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  background: ${theme.overlayBackgroundColor};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 3px ${theme.smallShadowColor};
`

// BUTTONS

export const Button = styled.TouchableHighlight`
  width: 100px;
  height: 30px;
  background: ${p =>
    p.isPressed
    ? theme.secondaryBlueColor
    : theme.primaryBlueColor
  };
  border: none;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;
  box-shadow: 0 2px 2px rgba(41, 71, 242, 0.4);
`

export const SelectButton = styled(Button)`
  background: ${p =>
    p.isFollowing
    ? theme.primaryBlueColor
    : theme.lightBlueColor
  };
  box-shadow: 0 2px 2px ${p =>
    p.isFollowing
    ? 'rgba(41, 71, 242, 0.4)'
    : 'rgba(89, 190, 255, 0.4)'};
`

export const ButtonSuccess = styled(Button)`
  background: ${p =>
    p.success
    ? theme.successColor
    : theme.primaryBlueColor
  };
  box-shadow: 0 2px 2px ${p =>
    p.success
    ? 'rgba(0, 222, 96, 0.4)'
    : 'rgba(41, 71, 242, 0.4)'};
`

export const PosedButton = posed(Button)({
  init: { scale: 1 },
  press: { scale: 0.9 }
})

export const PosedSelectButton = posed(SelectButton)({
  init: { scale: 1 },
  press: { scale: 0.9 }
})

export const PosedButtonSuccess = posed(ButtonSuccess)({
  init: { scale: 1 },
  press: { scale: 0.9 }
})

export const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.buttonTextColor};
  text-align: center;
  margin: auto;
  line-height: 30px;
`

export const HeaderIoniconsButton = styled(Ionicons)`
  margin: auto;
`

export const StyledTouchable = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  margin: 0 10px;
`

// INPUTS

export const Input = styled.TextInput`
  background: transparent;
  height: 100%;
  width: 65%;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.primaryTextColor};
`

export const InputHigh = styled(Input)`
  padding: 15px 0;
`

export const WideInput = styled(Input)`
  width: 100%;
  padding: 0 0 0 40px;
`

// LABELS

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.primaryTextColor};
  margin: 10px;
`

export const SmallLabel = styled.Text`
  font-size: 13px;
  line-height: 20px;
  font-weight: bold;
  color: ${theme.secondaryTextColor};
  margin: auto 10px auto 0;
  max-width: 100px;
`

export const FixedSmallLabel = styled(SmallLabel)`
  margin: 15px 10px auto 0;
`

export const BigLabel = styled(SmallLabel)`
  color: ${theme.primaryTextColor};
  font-size: 16px;
  max-width: 100%;
`

export const DarkLabel = styled(SmallLabel)`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 95%;
  color: ${theme.primaryBlueColor};
  margin: 0;
  padding: 10px 20px;
`

// AVATARS

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  display: flex;
  background: ${theme.baseBackgroundColor};
  margin: 10px auto;
  border-radius: 35px;
`

export const AvatarSmall = styled(Avatar)`
  height: 30px;
  width: 30px;
  margin: auto 10px;
  border-radius: 15px;
`

// SCROLL ELEMENTS

export const Scrollable = styled.ScrollView`
  height: 60px;
  margin: 0 10px;
  display: flex;
`

export const ScrollElemSmall = styled.TouchableHighlight`
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
`

export const ScrollImgWrap = styled.View`
  height: 60px;
  width: 60px;
  margin: auto;
  background: ${p =>
    p.provider === 'Facebook' && palette.facebook
    || p.provider === 'Twitter' && palette.twitter
    || p.provider === 'Instagram' && palette.instagram
    || p.provider === 'Youtube' && palette.youtube
    || p.provider === 'Tumblr' && palette.tumblr
    || p.provider === 'Spotify' && palette.spotify
  };
  border-radius: 30px;
  box-shadow: 0 4px 3px ${theme.bigShadowColor};
`

export const ScrollImg = styled.Image`
  height: 54px;
  width: 54px;
  margin: auto;
  border-radius: 27px;
  border-width: 1px;
  border-color: ${theme.baseBackgroundColor};
`

export const ScrollWord = styled.Text`
  color: ${theme.secondaryTextColor};
  font-size: 16px;
  font-weight: bold;
`

export const ScrollWordActive = styled(ScrollWord)`
  color: ${theme.primaryBlueColor};
`
