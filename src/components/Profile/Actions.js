import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px auto;
`

const Button = styled.TouchableHighlight`
  width: 100px;
  height: 30px;
  background: #59BEFF;
  border: none;
  border-radius: 10px;
  display: flex;
  margin: auto 20px;
  box-shadow: 0 2px 2px rgba(89, 190, 255, 0.4);
`

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FAFAFA;
  text-align: center;
  margin: auto;
  line-height: 30px;
`

class Actions extends PureComponent {
  render() {
    return (
      <StyledWrapper>
        <Button>
          <BtnText>
            merge
          </BtnText>
        </Button>
        <Button>
          <BtnText>
            talk to
          </BtnText>
        </Button>
      </StyledWrapper>
    )
  }
}

export default Actions
