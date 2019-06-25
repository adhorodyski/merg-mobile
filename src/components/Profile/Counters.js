import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import * as theme from '../Shared/themes'

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
  color: ${theme.primaryTextColor};
  text-align: center;
`

const SmallSpan = styled.Text`
  font-size: 13px;
  color: ${theme.secondaryTextColor};
  text-align: center;
`

class Counters extends PureComponent {
  render() {
    const { followers, follows } = this.props

    return (
      <StyledWrapper>
        <CountWrap>
          <NumSpan>
            {followers && followers.length} M
          </NumSpan>
          <SmallSpan>
            followers
          </SmallSpan>
        </CountWrap>
        <CountWrap>
          <NumSpan>
            {follows && follows.length} K
          </NumSpan>
          <SmallSpan>
            follows
          </SmallSpan>
        </CountWrap>
      </StyledWrapper>
    )
  }
}

export default Counters
