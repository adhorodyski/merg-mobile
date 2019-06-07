import React, { PureComponent } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { withNavigation, StackActions } from 'react-navigation'
import styled from 'styled-components'
import { palette } from './palette'
import { Ionicons } from '@expo/vector-icons'

import { AvatarSmall } from '../Shared/UI'

export const ResultTile = styled.View`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 140px;
  background: ${palette.white};
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

const Header = styled.TouchableWithoutFeedback`
  height: 50px;
  width: 100%;
`

const StyledHeaderInsider = styled.View`
  display: flex;
  flex-direction: row;
`

const H4 = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin: auto 0;
  color: ${palette.darkText};
`

const TimeP = styled.Text`
  color: ${palette.lightText};
  font-size: 12px;
  margin: auto auto auto 10px;
`

const Icon = styled(Ionicons)`
  display: flex;
  align-self: flex-end;
  padding: 10px;
  margin: auto 10px auto auto;
`

class TileHeader extends PureComponent {
  render() {
    const {
      navigation,
      url,
      time,
      user: {
        firstName,
        username,
        profilePic
      }
    } = this.props
    
    return (
      <Header onPress={() => {
        const pushAction = StackActions.push({
          routeName: 'ProfileOverlay',
          params: {
            username: username,
          }
        })
        navigation.dispatch(pushAction)
      }}>
        <StyledHeaderInsider>
          <AvatarSmall source={{uri: profilePic}} />
          <H4>{firstName}</H4>
          <TimeP>{time}</TimeP>
          <Icon
            name="ios-arrow-dropright"
            size={20}
            color="rgba(33, 33, 33, 0.4)" />
        </StyledHeaderInsider>
      </Header>
    )
  }
}

export default withNavigation(TileHeader)
