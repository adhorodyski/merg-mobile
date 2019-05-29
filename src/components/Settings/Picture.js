import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  StyledViewMargin,
  DarkLabel,
  Avatar
} from '../Reusable/UI'

class Picture extends PureComponent {
  render() {
    const { profilePic } = this.props
    return (
      <StyledViewMargin>
        <Avatar source={{uri: profilePic}} />
        <DarkLabel>Update your profile picture</DarkLabel>
      </StyledViewMargin>
    )
  }
}

const mapStateToProps = state => ({
  profilePic: state.loggedUser.profilePic
})

export default connect(mapStateToProps)(Picture)
