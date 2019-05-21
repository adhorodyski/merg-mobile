import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const StyledText = styled.Text`
  font-size: 14px;
  padding: 0 20px;
  margin: 10px auto;
`

class Note extends PureComponent {
  render() {
    return (
      <StyledText>
        Follow people, not profiles.
      </StyledText>
    )
  }
}

export default Note
