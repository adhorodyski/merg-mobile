import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { Text, Dimensions, View, Image, ScrollView, FlatList } from 'react-native'
import styled from 'styled-components'

import Greeting from './Greeting'
import Ocean from './Ocean'

export const Main = styled.ScrollView`
  background: #f5f5f5;
  height: ${Dimensions.get('window').height};
`

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
  margin: auto;
`

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
  componentDidMount = () => {
    this.props.fetchLoggedUser()
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


export default connect(null, { fetchLoggedUser })(HomeScreen)
