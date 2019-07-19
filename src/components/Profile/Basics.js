import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import * as theme from '../Shared/themes'

import { Avatar } from '../Shared/UI'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
  padding: 10px;
`

const NamesWrap = styled.View`
  display: flex;
  justify-content: center;
  margin: auto 0;
`

const AvatarWrapper = styled.View`
  height: 80px;
  width: 80px;
  margin: auto 10px;
  border-radius: 40px;
  box-shadow: 0 4px 5px ${theme.mediumShadowColor};
`

const StyledAvatar = styled(Avatar)`
  height: 100%;
  width: 100%;
  margin: auto 10px auto auto;
  border-radius: 40px;
`

const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${theme.primaryTextColor};
`

const Username = styled.Text`
  font-size: 15px;
  color: ${theme.primaryTextColor};
`

const Sp = styled.Text`
  opacity: 0.3;
`

class Basics extends PureComponent {
  render() {
    const {
      firstName,
      username,
      profilePic
    } = this.props

    return (
      <StyledWrapper>
        <AvatarWrapper>
          <StyledAvatar source={{uri: profilePic}} />
        </AvatarWrapper>
        <NamesWrap>
          <Name>
            {firstName}
          </Name>
          <Username>
            <Sp>@</Sp>
            {username}
          </Username>
        </NamesWrap>
      </StyledWrapper>
    )
  }
}

export default Basics
