import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { AvatarSmall } from '../Shared/UI'

const StyledAvatarSmall = styled(AvatarSmall)`
  margin: auto 0;
  height: 30px;
  width: 30px;
  border-radius: 15px;
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
