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

import { MainView } from '../Shared/UI'
import River from './River'
import About from './About'

class ExploreProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.navigation.state.params
    this.props.navigation.setParams({ title: username })
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
  }

  refreshView = async () => {
    const { username } = this.props.navigation.state.params
    await this.props.refreshExploreUser()
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
    await this.props.refreshExploreUser()
  }

  mode = 'EXPLORE'

  render() {
    const { user, isFollowing, river, refreshing } = this.props
    return (
      <MainView>
        <River
          river={river}
          mode={this.mode}
          user={user}
          isFollowing={isFollowing}
          refreshing={refreshing}
          refreshView={this.refreshView} />
      </MainView>
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
