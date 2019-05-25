import React, { PureComponent } from 'react'

import {
  StyledViewMargin,
  CenterBlueLabel,
  Avatar
} from '../Reusable/UI'

class Picture extends PureComponent {
  render() {
    return (
      <StyledViewMargin>
        <Avatar />
        <CenterBlueLabel>Update your profile picture</CenterBlueLabel>
      </StyledViewMargin>
    )
  }
}

export default Picture
