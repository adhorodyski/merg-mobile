import React, { PureComponent } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  padding: 10px;
`

const NamesWrap = styled.View`
  display: flex;
  justify-content: center;
  margin: auto 0;
`

const AvatarWrap = styled.View`
  display: flex;
  margin-right: 10px;
`

const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  background: #FFFFFF;
  margin: auto;
  border-radius: 25px;
`

const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
`

const Username = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color: #808080;

  &:before {
    content: '@';
    opacity: 0.5;
  }
`

class Basics extends PureComponent {
  render() {
    return (
      <StyledWrapper>
        <AvatarWrap>
          <Avatar />
        </AvatarWrap>
        <NamesWrap>
          <Name>
            Adam Horodyski
          </Name>
          <Username>
            adhorodyski
          </Username>
        </NamesWrap>
      </StyledWrapper>
    )
  }
}

export default Basics
