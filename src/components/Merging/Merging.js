import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { Main } from '../Home/Home'
import { StyledLabel } from '../Settings/Logout'

const LabelContainer = styled.View`
  display: flex;
  align-items: center;
  max-width: 95%;
  margin: 20px 10px;
`

const Label = styled(StyledLabel)`
  text-align: center;
`

class MergingScreen extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <Main>
        <LabelContainer>
          <StyledLabel>
            Choose streams to merge for your followers
          </StyledLabel>
        </LabelContainer>
      </Main>
    )
  }
}

export default withNavigation(MergingScreen)
