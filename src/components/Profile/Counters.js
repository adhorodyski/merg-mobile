import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const CountWrap = styled.View`
  display: flex;
  margin: 10px 20px;
  width: 100px;
`

const NumSpan = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`

const SmallSpan = styled.Text`
  font-size: 13px;
  color: #818181;
  text-align: center;
`

const S = styled.Text`
  font-size: 13;
  color: #818181;
`

class Counters extends PureComponent {
  render() {
    const { followers, follows } = this.props
    return (
      <StyledWrapper>
        <CountWrap>
          <NumSpan>
            {followers.length} <S>M</S>
          </NumSpan>
          <SmallSpan>
            followers
          </SmallSpan>
        </CountWrap>
        <CountWrap>
          <NumSpan>
            {follows.length} <S>K</S>
          </NumSpan>
          <SmallSpan>
            follows
          </SmallSpan>
        </CountWrap>
      </StyledWrapper>
    )
  }
}

const mapStateToProps = state => ({
  followers: state.loggedUser.followers,
  follows: state.loggedUser.follows
})

export default connect(mapStateToProps)(Counters)
