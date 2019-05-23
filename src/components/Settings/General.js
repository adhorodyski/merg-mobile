import React, { PureComponent } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import styled from 'styled-components/native'

import { StyledView, Title, Tile, Label } from './Personal'

class General extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>General</Title>
        <Tile>
          <Label>Language</Label>
        </Tile>
        <Tile>
          <Label>Location</Label>
        </Tile>
      </StyledView>
    )
  }
}

export default General
