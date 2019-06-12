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

import { MainView } from '../Shared/UI'
import River from './River'
import About from './About'

class ProfileScreen extends PureComponent {
  componentDidMount = async () => {
    const { username } = this.props.user
    await this.props.fetchAuth()
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
  }

  refreshView = async () => {
    const { username } = this.props.user
    await this.props.refreshLoggedUser()
    await this.props.fetchAuth()
    await this.props.fetchPathUser(username, this.mode)
    await this.props.fetchFullRiver(this.mode)
    await this.props.loadRiverChunk(this.mode)
    await this.props.refreshLoggedUser()
  }

  mode = 'PROFILE'

  render() {
    const { user, river, refreshing } = this.props
    return (
      <MainView>
        <River
          river={river}
          mode={this.mode}
          user={user}
          refreshing={refreshing}
          refreshView={this.refreshView} />
      </MainView>
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
