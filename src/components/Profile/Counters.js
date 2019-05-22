import React, { PureComponent } from 'react'
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
    return (
      <StyledWrapper>
        <CountWrap>
          <NumSpan>
            87.6 <S>M</S>
          </NumSpan>
          <SmallSpan>
            followers
          </SmallSpan>
        </CountWrap>
        <CountWrap>
          <NumSpan>
            1.1 <S>K</S>
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
