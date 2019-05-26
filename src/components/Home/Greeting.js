import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  padding: 0 5px;
`

const AvatarContainer = styled.View`
  height: 100%;
  width: 40px;
  margin-left: 5px;
  display: flex;
  align-self: flex-start;
`

const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  background: #FFFFFF;
  margin: auto;
  border-radius: 20px;
`

const P = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #818181;
  margin: auto 0 auto 10px;
  align-self: flex-start;
`

const Span = styled.Text`
  color: #2947F2;
  font-size: 16px;
  font-weight: bold;
  margin: auto 0;
  align-self: flex-start;
`

class Greeting extends PureComponent {
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

const mapStateToProps = state => ({
  firstName: state.loggedUser.firstName
})

export default connect(mapStateToProps)(Greeting)
