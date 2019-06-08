import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  StyledViewMargin,
  DarkLabel,
  Avatar
} from '../Shared/UI'

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
  profilePic: state.loggedUser.user.profilePic
})

export default connect(mapStateToProps)(Picture)
