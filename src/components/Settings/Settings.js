import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

import { Main } from '../Home/Home'
import Picture from './Picture'
import Personal from './Personal'
import General from './General'
import Legal from './Legal'
import Logout from './Logout'

class Settings extends PureComponent {
  render() {
    return (
      <Main>
        <Picture />
        <Personal />
        <General />
        <Legal />
        <Logout />
      </Main>
    )
  }
}

export default Settings
