import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { fetchAuth } from '../../actions/authActions'
import {
  fetchPathUser,
  fetchFullRiver,
  loadRiverChunk
} from '../../actions/pathUserActions'

import { Main } from '../Shared/UI'
import River from './River'
import About from './About'

class ProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.user
    const mode = 'PROFILE'
    await this.props.fetchAuth()
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
  }

  render() {
    const { user, river } = this.props
    return (
      <Main>
        <About user={user} />
        <River river={river} />
      </Main>
    )
  }
}

mapStateToProps = state => ({
  user: state.loggedUser.user,
  river: state.loggedUser.river
})

export default withNavigation(connect(
  mapStateToProps,
  {
    fetchAuth,
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk
  }
)(ProfileScreen))
