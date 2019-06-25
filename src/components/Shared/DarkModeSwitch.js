import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { updateDarkMode } from '../../actions/settingsActions'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components'
import { palette } from './palette'

import { HeaderIoniconsButton, StyledTouchable } from './UI'

class DarkModeSwitch extends PureComponent {
  render() {
    const { isDarkValue, updateDarkMode } = this.props

    if (!isDarkValue) {
      return (
        <StyledTouchable onPress={() => updateDarkMode() }>
          <HeaderIoniconsButton
            name="ios-moon"
            size={30}
            color={`${palette.lightYellow}`} />
        </StyledTouchable>
      )
    } else {
      return (
        <StyledTouchable onPress={() => updateDarkMode() }>
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
    updateDarkMode
  }
)(DarkModeSwitch)
