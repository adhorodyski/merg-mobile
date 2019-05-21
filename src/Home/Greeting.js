import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding: 0 5px;
`

const AvatarContainer = styled.View`
  height: 100%;
  width: 36px;
  margin-left: 5px;
  display: flex;
  align-self: flex-start;
`

const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  background: #FFFFFF;
  margin: auto;
  border-radius: 18px;
`

const P = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #808080;
  margin: auto 0 auto 10px;
  align-self: flex-start;
`

const Span = styled.Text`
  color: #6332C4;
  font-size: 15px;
  font-weight: bold;
  margin: auto 0;
  align-self: flex-start;
`

class Greeting extends PureComponent {
  logoutUser = () => {
    console.log('logged out!')
  }

  render() {
    const {
      firstName
    } = this.props

    return (
      <StyledWrapper>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>
        <P>
          Hello, <Span>{firstName}</Span>
        </P>
      </StyledWrapper>
    )
  }
}

export default Greeting
