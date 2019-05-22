import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import CreatorTile from './CreatorTile'

const StyledView = styled.View`
  margin-bottom: 50px;
`

class SearchResults extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      creators: ['Tom', 'Jerry', 'Mat', 'Zuck', 'Jonny', 'Igi', 'Janet']
    }
  }

  renderResults = () => {
    const { creators } = this.state

    return creators.map(e => {
      return (
        <CreatorTile key={e} />
      )
    })
  }

  render() {
    return (
      <StyledView>
        { this.renderResults() }
      </StyledView>
    )
  }
}

export default SearchResults
