import React, { PureComponent } from 'react'

import {
  Tile,
  Title,
  StyledView,
  SmallLabel
} from '../Reusable/UI'

class General extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>General</Title>
        <Tile>
          <SmallLabel>Language</SmallLabel>
        </Tile>
        <Tile>
          <SmallLabel>Location</SmallLabel>
        </Tile>
      </StyledView>
    )
  }
}

export default General
