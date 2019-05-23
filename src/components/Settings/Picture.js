import React, { PureComponent } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import styled from 'styled-components/native'

import { StyledView, Tile, Label } from './Personal'

const Container = styled(StyledView)`
  margin: 10px auto;
`

const AvatarWrap = styled.View`
  display: flex;
  margin: 10px auto;
`

const Avatar = styled.Image`
  height: 75px;
  width: 75px;
  background: #FFFFFF;
  margin: auto;
  border-radius: 40px;
`

const PicLabel = styled(Label)`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 95%;
  color: #59BEFF;
`

class Picture extends PureComponent {
  render() {
    return (
      <Container>
        <AvatarWrap>
          <Avatar />
        </AvatarWrap>
        <PicLabel>Update your profile picture</PicLabel>
      </Container>
    )
  }
}

export default Picture
