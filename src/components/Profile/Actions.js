import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import { Button, BtnText } from '../Shared/UI'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px auto;
`

const StyledButton = styled(Button)`
  margin: auto 20px;
`

class Actions extends PureComponent {
  render() {
    return (
      <StyledWrapper>
        <StyledButton>
          <BtnText>
            merge
          </BtnText>
        </StyledButton>
        <StyledButton>
          <BtnText>
            talk to
          </BtnText>
        </StyledButton>
      </StyledWrapper>
    )
  }
}

export default Actions
