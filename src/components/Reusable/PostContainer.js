import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import { AvatarSmall } from '../Reusable/UI'

export const ResultTile = styled.View`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 180px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

const Header = styled.View`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const H4 = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin: auto 0;
  color: #333333;
`

const TimeP = styled.Text`
  color: #818181;
  font-size: 12px;
  margin: auto auto auto 10px;
`

const Icon = styled(Ionicons)`
  display: flex;
  align-self: flex-end;
  padding: 10px;
  margin: auto 10px auto auto;
`

export class TileHeader extends PureComponent {
  render() {
    return (
      <Header>
        <AvatarSmall />
        <H4>Mystery Guitar Man</H4>
        <TimeP>5 min</TimeP>
        <Icon
          name="ios-arrow-dropright"
          size={20}
          color="rgba(33, 33, 33, 0.4)" />
      </Header>
    )
  }
}
