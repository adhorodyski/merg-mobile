import React, { PureComponent } from 'react'

import { Main } from '../Home/Home'
import Greeting from '../Home/Greeting'
import Searchbox from './Searchbox'
import Tags from './Tags'
import SearchResults from './SearchResults'

class ExploreScreen extends PureComponent {
  render() {
    return (
      <Main>
        <Greeting />
        <Searchbox />
        <Tags />
        <SearchResults />
      </Main>
    )
  }
}

export default ExploreScreen
