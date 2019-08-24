import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { updateDarkMode } from '../../actions/settingsActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components'
import { palette } from './palette'

import { HeaderIoniconsButton, StyledTouchable } from './UI'

class DarkModeSwitch extends PureComponent {
  setDarkMode = async () => {
    await this.props.updateDarkMode()
    await this.props.fetchLoggedUser()
  }

  render() {
    const { isDarkValue, updateDarkMode } = this.props

    if (!isDarkValue) {
      return (
        <StyledTouchable onPress={this.setDarkMode}>
          <HeaderIoniconsButton
            name="ios-moon"
            size={30}
            color={`${palette.lightYellow}`} />
        </StyledTouchable>
      )
    } else {
      return (
        <StyledTouchable onPress={this.setDarkMode}>
          <HeaderIoniconsButton
            name="ios-moon"
            size={30}
            color={`${palette.lightText}`} />
        </StyledTouchable>
      )
    }
  }
}

const mapStateToProps = state => ({
  isDarkValue: state.settings.general.isDarkValue
})

export default connect(
  mapStateToProps,
  {
    updateDarkMode,
    fetchLoggedUser
  }
)(DarkModeSwitch)
