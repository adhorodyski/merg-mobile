import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'

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

const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  display: flex;
  background: #FFFFFF;
  margin: auto 10px auto auto;
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
        <Avatar source={{uri: profilePic}} />
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

const mapStateToProps = state => ({
  firstName: state.loggedUser.firstName,
  username: state.loggedUser.username,
  profilePic: state.loggedUser.profilePic
})

export default connect(mapStateToProps)(Basics)
