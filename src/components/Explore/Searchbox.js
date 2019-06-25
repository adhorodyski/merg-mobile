import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import * as theme from '../Shared/themes'
import { Ionicons } from '@expo/vector-icons'

import { Tile } from '../Shared/UI'

const StyledTile = styled(Tile)`
  position: relative;
  width: auto;
  margin: 0 10px;
  padding: 0;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
  background: ${theme.overlayBackgroundColor};
`

export const IconSearch = styled(Ionicons)`
  position: absolute;
  top: 15px;
  left: 18px;
`

const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  padding: 0 30px 0 50px;
  border-radius: 10px;
  background: transparent;
  color: ${theme.primaryTextColor};
  font-weight: bold;
  font-size: 18px;
`

class Searchbox extends PureComponent {
  render() {
    return (
      <StyledTile>
        <IconSearch
          name="ios-search"
          size={20}
          color={`${palette.lightText}`} />
        <Input
          placeholder='Search whatever!'
          placeholderTextColor={`${palette.lightText}`} />
      </StyledTile>
    )
  }
}

export default Searchbox
