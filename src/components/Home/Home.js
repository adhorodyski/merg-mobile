import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import {
  fetchFullOcean,
  loadOceanChunk,
  refreshHome
} from '../../actions/userOceanActions'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'
import { palette } from '../Shared/palette'

import { MainView } from '../Shared/UI'
import Ocean from './Ocean'

export const StyledView = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
  background: #ffffff;
`

export const StyledText = styled.Text`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
`

class HomeScreen extends PureComponent {
  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchFullOcean()
    await this.props.loadOceanChunk()
  }

  refreshView = async () => {
    await this.props.refreshHome()
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
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
    refreshHome
  }
)(HomeScreen)
