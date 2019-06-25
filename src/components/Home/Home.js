import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { hydrateInitial } from '../../actions/settingsActions'
import {
  fetchFullOcean,
  loadOceanChunk,
  refreshHome
} from '../../actions/userOceanActions'

import { MainView } from '../Shared/UI'
import Ocean from './Ocean'

class HomeScreen extends PureComponent {
  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.hydrateInitial()
    await this.props.fetchFullOcean()
    await this.props.loadOceanChunk()
  }

  refreshView = async () => {
    await this.props.refreshHome()
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.hydrateInitial()
    await this.props.fetchFullOcean()
    await this.props.loadOceanChunk()
    await this.props.refreshHome()
  }

  render() {
    const { refreshing } = this.props
    return (
      <MainView>
        <Ocean
          refreshing={refreshing}
          refreshView={this.refreshView} />
      </MainView>
    )
  }
}

const mapStateToProps = state => ({
  refreshing: state.userOcean.refreshing
})

export default connect(
  mapStateToProps,
  {
    fetchAuth,
    fetchLoggedUser,
    fetchFullOcean,
    loadOceanChunk,
    hydrateInitial,
    refreshHome
  }
)(HomeScreen)
