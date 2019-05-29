import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { StyledViewMargin2, DarkLabel } from '../Shared/UI'

const Touch = styled.TouchableOpacity`
  display: flex;
  align-self: center;
  align-items: center;
  text-align: center;
  max-width: 95%;
  height: 40px;
`

class Logout extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <StyledViewMargin2>
        <Touch onPress={() => {
          navigation.navigate('PrimaryChoice')
        }}>
          <DarkLabel>
            Sign out
          </DarkLabel>
        </Touch>
      </StyledViewMargin2>
    )
  }
}

export default withNavigation(Logout)
