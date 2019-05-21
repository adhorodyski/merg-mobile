import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

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
  color: #808080;
`

class Basics extends PureComponent {
  render() {
    const {
      nameDisplayed,
      username
    } = this.props
    
    return (
      <StyledWrapper>
        <AvatarWrap>
          <Avatar />
        </AvatarWrap>
        <NamesWrap>
          <Name>
            {nameDisplayed}
          </Name>
          <Username>
            {username}
          </Username>
        </NamesWrap>
      </StyledWrapper>
    )
  }
}

const mapStateToProps = state => ({
  nameDisplayed: state.loggedUser.nameDisplayed,
  username: state.loggedUser.username
})

export default connect(mapStateToProps)(Basics)
