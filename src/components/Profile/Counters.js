import React, { PureComponent } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import * as theme from '../Shared/themes'
import { palette } from '../Shared/palette'
import { Ionicons } from '@expo/vector-icons'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const CountWrap = styled.View`
  display: flex;
  margin: 10px 20px;
  width: 70px;
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

const IconWrapper = styled.TouchableWithoutFeedback``

const FlexWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Icon = styled(Ionicons)`
  margin: auto 10px;
`

class Counters extends PureComponent {
  render() {
    const {
      followers,
      follows,
      streamsArray,
      isStreamcountExpanded,
      expandStreamcount
    } = this.props

    return (
      <StyledWrapper>
        <CountWrap>
          <NumSpan>
            {followers && followers.length} K
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
        <IconWrapper onPress={() => expandStreamcount()}>
          <CountWrap>
            <FlexWrap>
              <NumSpan>
                {
                  streamsArray &&
                  streamsArray.filter(e => e === true).length
                }
              </NumSpan>
              <Icon
                name={
                  isStreamcountExpanded
                  ? "ios-arrow-down"
                  : "ios-arrow-up"
                }
                size={16}
                color={`${palette.lightText}`} />
            </FlexWrap>
            <SmallSpan>
              streams
            </SmallSpan>
          </CountWrap>
        </IconWrapper>
      </StyledWrapper>
    )
  }
}

export default Counters
