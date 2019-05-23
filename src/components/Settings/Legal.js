import React, { PureComponent } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import styled from 'styled-components/native'

import { StyledView, Title, Label, TouchableOpacity } from './Personal'

const LinkLabel = styled(Label)`
  color: #333333;
  font-size: 16px;
  max-width: 100%;
`

const Tile = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  background: #FAFAFA;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

class Legal extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>Legal</Title>
        <Tile>
          <LinkLabel>Terms</LinkLabel>
        </Tile>
        <Tile>
          <LinkLabel>Privacy Policy</LinkLabel>
        </Tile>
        <Tile>
          <LinkLabel>About</LinkLabel>
        </Tile>
        <Tile>
          <LinkLabel>Work</LinkLabel>
        </Tile>
        <Tile>
          <LinkLabel>Developers</LinkLabel>
        </Tile>
        <Tile>
          <LinkLabel>Support</LinkLabel>
        </Tile>
      </StyledView>
    )
  }
}

export default Legal
