import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { fetchFullOcean, loadOceanChunk } from '../../actions/userOceanActions'
import { Text, View, Image, ScrollView, FlatList } from 'react-native'
import styled from 'styled-components'

import { Main } from '../Shared/UI'
import Greeting from './Greeting'
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

  render() {
    return (
      <Main>
        <Greeting />
        <Ocean />
      </Main>
    )
  }
}

export default connect(
  null,
  {
    fetchAuth,
    fetchLoggedUser,
    fetchFullOcean,
    loadOceanChunk
  }
)(HomeScreen)
