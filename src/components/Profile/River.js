import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import { ResultTile, TileHeader } from '../Shared/PostContainer'

const Results = styled.View`
  margin-bottom: 50px;
`

class River extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: ['sf', 'sg', 'st', 'ey']
    }
  }

  renderOcean = () => {
    const { count } = this.state

    return count.map(e => {
      return (
        <View key={e}>
          <TileHeader />
          <ResultTile />
        </View>
      )
    })
  }

  render() {
    return (
      <Results>
        { console.log('river') }
      </Results>
    )
  }
}

export default River
