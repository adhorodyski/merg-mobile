import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

export const ResultTile = styled.View`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
  min-height: 180px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

const Header = styled.View`
  height: 45px;
  width: 100%;
  background: #FAFAFA;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleSection = styled.View`
  height: 45px;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 10px;
`

const AvatarContainer = styled.View`
  height: 100%;
  width: 36px;
  margin: 0 10px;
  display: flex;
`

const Avatar = styled.Image`
  height: 36px;
  width: 36px;
  background: #F0F0F0;
  margin: auto;
  border-radius: 18px;
`

const H4 = styled.Text`
  font-size: 13px;
  margin: auto auto auto 0;
  color: #333333;
`

const H3 = styled.Text`
  font-size: 12px;
  margin: auto auto 0 auto;
  color: #333333;
`

const TimeP = styled.Text`
  color: #808080;
  font-size: 12px;
  margin: 0 auto auto auto;
  font-weight: normal;
`

const CardTitle = styled.TouchableHighlight`
  width: 80px;
  height: 45px;
  background: #F0F0F0;
  border: none;
  border-top-right-radius: 10px;
  display: flex;
`

const FlexWrap = styled.View`
  margin: auto;
`

export class TileHeader extends PureComponent {
  render() {
    return (
      <Header>
        <TitleSection>
          <AvatarContainer>
              <Avatar />
          </AvatarContainer>
          <H4>Mystery Guitar Man</H4>
        </TitleSection>
        <CardTitle>
          <FlexWrap>
            <H3>Instagram</H3>
            <TimeP>5 min</TimeP>
          </FlexWrap>
        </CardTitle>
      </Header>
    )
  }
}
