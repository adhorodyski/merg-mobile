import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {
  fetchPathUser,
  fetchFullRiver,
  loadRiverChunk,
  refreshExploreUser
} from '../../actions/pathUserActions'

import { Main } from '../Shared/UI'
import River from './River'
import About from './About'

class ExploreProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.navigation.state.params
    const mode = 'EXPLORE'
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
  }

  refreshView = async () => {
    const { username } = this.props.navigation.state.params
    const mode = 'EXPLORE'
    await this.props.refreshExploreUser()
    await this.props.fetchPathUser(username, mode)
    await this.props.fetchFullRiver(mode)
    await this.props.loadRiverChunk(mode)
    await this.props.refreshExploreUser()
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
  user: state.exploreUser.user,
  isFollowing: state.exploreUser.isFollowing,
  river: state.exploreUser.river,
  refreshing: state.exploreUser.refreshing
})

export default withNavigation(connect(
  mapStateToProps,
  {
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk,
    refreshExploreUser
  }
)(ExploreProfileScreen))
