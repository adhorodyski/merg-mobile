import React, { PureComponent } from 'react'
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { fetchCreators } from '../../actions/listsActions'
import { loadCreatorsChunk, refreshExplore } from '../../actions/exploreActions'

import { MainView } from '../Shared/UI'
import SearchResults from './SearchResults'

class ExploreScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchCreators()
    await this.props.loadCreatorsChunk()
  }

  refreshView = async () => {
    await this.props.refreshExplore()
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchCreators()
    await this.props.loadCreatorsChunk()
    await this.props.refreshExplore()
  }

  render() {
    const { refreshing } = this.props
    return (
      <MainView>
        <SearchResults
          refreshing={refreshing}
          refreshView={this.refreshView} />
      </MainView>
    )
  }
}

const mapStateToProps = state => ({
  refreshing: state.explore.refreshing
})

export default connect(
  mapStateToProps,
  {
    fetchAuth,
    fetchLoggedUser,
    fetchCreators,
    loadCreatorsChunk,
    refreshExplore
  }
)(ExploreScreen)
