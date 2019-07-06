import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { AvatarSmall } from '../Shared/UI'

const StyledAvatarSmall = styled(AvatarSmall)`
  margin: auto 0;
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
`

class GreetingAvatar extends PureComponent {
  render() {
    const { profilePic } = this.props

    return <StyledAvatarSmall source={{ uri: profilePic }} />
  }
}

const mapStateToProps = state => ({
  profilePic: state.loggedUser.user.profilePic
})

export default connect(mapStateToProps)(GreetingAvatar)
