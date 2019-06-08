import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {
  fetchPathUser,
  fetchFullRiver,
  loadRiverChunk
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
  user: state.homeUser.user,
  river: state.homeUser.river
})

export default withNavigation(connect(
  mapStateToProps,
  {
    fetchPathUser,
    fetchFullRiver,
    loadRiverChunk
  }
)(HomeProfileScreen))
