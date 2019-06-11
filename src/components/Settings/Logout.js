import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
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
  proceedLogout = () => {
    const { navigation } = this.props
    this.props.logoutUser(navigation)
  }

  render() {
    return (
      <StyledViewMargin2>
        <Touch onPress={this.proceedLogout}>
          <DarkLabel>
            Sign out
          </DarkLabel>
        </Touch>
      </StyledViewMargin2>
    )
  }
}

export default withNavigation(
  connect(
    null,
    {
      logoutUser
    }
  )(Logout)
)
