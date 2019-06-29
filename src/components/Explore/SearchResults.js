import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RefreshControl, View, Dimensions } from 'react-native'
import styled from 'styled-components'

import CreatorTile from './CreatorTile'
import Searchbox from './Searchbox'
import Tags from './Tags'
import { EmptyFlatlistTemplate, ResultsFlatlist } from '../Shared/UI'

const StyledResultsFlatlist = styled(ResultsFlatlist)`
  height: 100%;
`

const Search = () => {
  return (
    <>
      <Searchbox />
      <Tags />
    </>
  )
}

class SearchResults extends PureComponent {
  renderResults = res => {
    const { follows, loggedUsername } = this.props

    return <CreatorTile
              result={res}
              follows={follows}
              loggedUsername={loggedUsername} />
  }

  render() {
    const { results, refreshView, refreshing } = this.props

    return (
      <StyledResultsFlatlist
        data={results}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item, idx }) => this.renderResults(item, idx)}
        ListEmptyComponent={EmptyFlatlistTemplate}
        ListHeaderComponent={Search}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshView}
          />
        } />
    )
  }
}

const mapStateToProps = state => ({
  results: state.explore.results,
  follows: state.loggedUser.user.follows,
  loggedUsername: state.loggedUser.user.username
})

export default connect(mapStateToProps)(SearchResults)
