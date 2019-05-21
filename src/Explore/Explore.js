import React, { PureComponent } from 'react'

import { StyledText, Main } from '../Home/Home'
import Greeting from '../Home/Greeting'

class ExploreScreen extends PureComponent {
  render() {
    return (
      <Main>
        <Greeting firstName='Adam' />
        <StyledText>Explore</StyledText>
      </Main>
    )
  }
}

export default ExploreScreen
