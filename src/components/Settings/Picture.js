import React, { PureComponent } from 'react'

import {
  StyledViewMargin,
  DarkLabel,
  Avatar
} from '../Reusable/UI'

class Picture extends PureComponent {
  render() {
    return (
      <StyledViewMargin>
        <Avatar />
        <DarkLabel>Update your profile picture</DarkLabel>
      </StyledViewMargin>
    )
  }
}

export default Picture
