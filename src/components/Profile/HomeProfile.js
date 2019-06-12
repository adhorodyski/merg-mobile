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

import { MainView } from '../Shared/UI'
import River from './River'

class HomeProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.navigation.state.params
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
  }

  refreshView = async () => {
    const { username } = this.props.navigation.state.params
    await this.props.refreshHomeUser()
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
    await this.props.refreshHomeUser()
  }

  mode = 'HOME'

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
