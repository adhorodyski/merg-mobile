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

const StyledAvatar = styled(Avatar)`
  height: 50px;
  width: 50px;
  margin: auto 10px auto auto;
  border-radius: 25px;
`

const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
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
        <StyledAvatar source={{uri: profilePic}} />
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
