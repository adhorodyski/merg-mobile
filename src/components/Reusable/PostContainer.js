import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

export const ResultTile = styled.View`
  min-height: 180px;
  background: #FFFFFF;
  border-top-width: 1px;
  border-top-color: rgba(51, 51, 51, 0.1);
`

const Header = styled.View`
  height: 45px;
  width: 100%;
  background: #FAFAFA;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleSection = styled.View`
  height: 45px;
  background: #FAFAFA;
  display: flex;
  flex-direction: row;
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
  background: #FFFFFF;
  margin: auto;
  border-radius: 18px;
`

const H4 = styled.Text`
  font-size: 13px;
  font-weight: normal;
  margin: auto auto auto 0;
  color: #333333;
`

const H3 = styled.Text`
  font-size: 12px;
  margin: auto auto 0 auto;
  font-weight: normal;
`

const TimeP = styled.Text`
  color: #808080;
  font-size: 12px;
  margin: 0 auto auto auto;
  font-weight: normal;
`

const CardTitle = styled.TouchableHighlight`
  width: 100px;
  height: 45px;
  background: #F0F0F0;
  border: none;
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
          <H4>Adam Horodyski</H4>
        </TitleSection>
        <CardTitle>
          <FlexWrap>
            <H3>Twitter</H3>
            <TimeP>5 minutes ago</TimeP>
          </FlexWrap>
        </CardTitle>
      </Header>
    )
  }
}
