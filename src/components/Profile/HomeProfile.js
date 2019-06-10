import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {
  fetchPathUser,
  fetchFullRiver,
  loadRiverChunk,
  refreshHomeUser
} from '../../actions/pathUserActions'

import { Main } from '../Shared/UI'
import River from './River'
import About from './About'

class HomeProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.navigation.state.params
    const mode = 'HOME'
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
  }

  refreshView = async () => {
    const { username } = this.props.navigation.state.params
    const mode = 'HOME'
    await this.props.refreshHomeUser()
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
    await this.props.refreshHomeUser()
  }

  render() {
    const { user, isFollowing, river, refreshing } = this.props
    return (
      <Main
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.refreshView}
          />
        }>
        <About user={user} isFollowing={isFollowing} />
        <River river={river} />
      </Main>
    )
  }
}

mapStateToProps = state => ({
  user: state.homeUser.user,
  isFollowing: state.homeUser.isFollowing,
  river: state.homeUser.river,
  refreshing: state.homeUser.refreshing
})

export default withNavigation(connect(
  mapStateToProps,
  {
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk,
    refreshHomeUser
  }
)(HomeProfileScreen))
