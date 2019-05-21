import React, { PureComponent } from 'react'
import { Text, View, Image, ScrollView, FlatList } from 'react-native'
import styled from 'styled-components'

import Greeting from './Greeting'
import Ocean from './Ocean'

export const Main = styled.ScrollView`
  width: auto;
  max-width: 615px;
  background: #f5f5f5;
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
  render() {
    return (
      <Main>
        <Greeting firstName='Adam' />
        <Ocean />
      </Main>
    )
  }
}

export default HomeScreen
