import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
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
    const { username } = this.props.navigation.state.params
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchPathUser(username)
    await this.props.fetchFullRiver()
    await this.props.loadRiverChunk()
  }

  render() {
    return (
      <Main>
        <About />
        <River />
      </Main>
    )
  }
}

export default withNavigation(connect(
  null,
  {
    fetchAuth,
    fetchLoggedUser,
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk
  }
)(ProfileScreen))
