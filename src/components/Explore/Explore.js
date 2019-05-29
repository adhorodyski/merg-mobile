import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { fetchCreators } from '../../actions/listsActions'

import { Main } from '../Home/Home'
import Greeting from '../Home/Greeting'
import Searchbox from './Searchbox'
import Tags from './Tags'
import SearchResults from './SearchResults'

class ExploreScreen extends PureComponent {
  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchCreators()
  }

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

export default connect(
  null,
  {
    fetchAuth,
    fetchLoggedUser,
    fetchCreators
  }
)(ExploreScreen)
