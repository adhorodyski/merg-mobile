import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import { ResultTile, TileHeader } from '../Reusable/PostContainer'

const Results = styled.View`
  margin-bottom: 50px;
`

class Ocean extends PureComponent {
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
        <ResultTile key={e}>
          <TileHeader />
        </ResultTile>
      )
    })
  }

  render() {
    return (
      <Results>
        { this.renderOcean() }
      </Results>
    )
  }
}

export default Ocean
