import React, { PureComponent } from 'react'

import {
  Tile,
  Title,
  StyledView,
  BigLabel
} from '../Reusable/UI'

class Legal extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>Legal</Title>
        <Tile>
          <BigLabel>Terms</BigLabel>
        </Tile>
        <Tile>
          <BigLabel>Privacy Policy</BigLabel>
        </Tile>
        <Tile>
          <BigLabel>About</BigLabel>
        </Tile>
        <Tile>
          <BigLabel>Work</BigLabel>
        </Tile>
        <Tile>
          <BigLabel>Developers</BigLabel>
        </Tile>
        <Tile>
          <BigLabel>Support</BigLabel>
        </Tile>
      </StyledView>
    )
  }
}

export default Legal
