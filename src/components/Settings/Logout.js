import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { StyledView } from './Personal'

const Container = styled(StyledView)`
  margin: 10px auto 30px auto;
`

const Touch = styled.TouchableOpacity`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 95%;
  height: 40px;
  display: flex;
  align-self: center;
  align-items: center;
`

const StyledLabel = styled.Text`
  color: #59BEFF;
  padding: 10px 20px;
  margin: 0;
  line-height: 20px;
  font-weight: bold;
  font-size: 13px;
  display: flex;
`

class Logout extends PureComponent {
  render() {
    return (
      <Container>
          <Touch>
            <StyledLabel>
              Sign out
            </StyledLabel>
          </Touch>
      </Container>
    )
  }
}

export default Logout
