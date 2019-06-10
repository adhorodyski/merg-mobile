import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { fetchAuth } from '../../actions/authActions'
import {
  fetchPathUser,
  fetchFullRiver,
  loadRiverChunk,
  refreshLoggedUser
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

  refreshView = async () => {
    const { username } = this.props.user
    const mode = 'PROFILE'
    await this.props.refreshLoggedUser()
    await this.props.fetchAuth()
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
    await this.props.refreshLoggedUser()
  }

  render() {
    const { user, river, refreshing } = this.props
    return (
      <Main
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.refreshView}
          />
        }>
        <About user={user} />
        <River river={river} />
      </Main>
    )
  }
}

mapStateToProps = state => ({
  user: state.loggedUser.user,
  river: state.loggedUser.river,
  refreshing: state.loggedUser.refreshing
})

export default withNavigation(connect(
  mapStateToProps,
  {
    fetchAuth,
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk,
    refreshLoggedUser
  }
)(ProfileScreen))
