import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'

import CreatorTile from './CreatorTile'

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
      <View>
        { this.renderResults() }
      </View>
    )
  }
}

export default SearchResults
