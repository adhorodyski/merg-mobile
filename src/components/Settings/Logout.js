import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { StyledViewMargin2 } from '../Reusable/UI'

const Touch = styled.TouchableOpacity`
  display: flex;
  align-self: center;
  align-items: center;
  text-align: center;
  max-width: 95%;
  height: 40px;
`

export const StyledLabel = styled.Text`
  color: #2645ec;
  padding: 10px 20px;
  margin: 0;
  line-height: 20px;
  font-weight: bold;
  font-size: 13px;
  display: flex;
`

class Logout extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <StyledViewMargin2>
        <Touch onPress={() => {
          navigation.navigate('PrimaryChoice')
        }}>
          <StyledLabel>
            Sign out
          </StyledLabel>
        </Touch>
      </StyledViewMargin2>
    )
  }
}

export default withNavigation(Logout)
