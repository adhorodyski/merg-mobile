import React, { PureComponent } from 'react'

import { Main } from '../Home/Home'
import River from './River'
import About from './About'

class ProfileScreen extends PureComponent {
  render() {
    return (
      <Main>
        <About />
        <River />
      </Main>
    )
  }
}

export default ProfileScreen
