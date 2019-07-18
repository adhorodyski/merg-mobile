import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import * as theme from '../Shared/themes'

const StyledText = styled.Text`
  font-size: 14px;
  color: ${theme.primaryTextColor};
  padding: 0 20px;
  margin: 20px auto;
`

class Note extends PureComponent {
  render() {
    const { about } = this.props
    return (
      <StyledText>
        {about}
      </StyledText>
    )
  }
}

export default Note
