import React, { PureComponent } from 'react'

import { Main } from '../Home/Home'
import Greeting from '../Home/Greeting'
import River from './River'
import About from './About'

class ProfileScreen extends PureComponent {
  render() {
    return (
      <Main>
        <Greeting firstName='Adam' />
        <About />
        <River />
      </Main>
    )
  }
}

export default ProfileScreen
