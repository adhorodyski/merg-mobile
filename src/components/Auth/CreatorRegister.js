import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { Main } from '../Home/Home'

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

class CreatorRegisterScreen extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <Main>
        <Touch onPress={() => {
          navigation.navigate('Merging')
        }}>
          <StyledLabel>
            go merging
          </StyledLabel>
        </Touch>
      </Main>
    )
  }
}

export default withNavigation(CreatorRegisterScreen)
