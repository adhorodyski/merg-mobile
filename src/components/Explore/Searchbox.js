import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import { Ionicons } from '@expo/vector-icons'

import { Tile } from '../Shared/UI'

const StyledTile = styled(Tile)`
  position: relative;
  width: auto;
  margin: 0 10px;
  padding: 0;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
  background: ${palette.darkGray};
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
  color: ${palette.darkText};
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
          color="rgba(33, 33, 33, 0.4)" />
        <Input placeholder='Search whatever!' />
      </StyledTile>
    )
  }
}

export default Searchbox
