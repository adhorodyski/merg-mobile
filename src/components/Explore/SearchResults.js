import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RefreshControl, View, Dimensions } from 'react-native'
import styled from 'styled-components'

import CreatorTile from './CreatorTile'
import { EmptyFlatlistTemplate, ResultsFlatlist } from '../Shared/UI'

const StyledResultsFlatlist = styled(ResultsFlatlist)`
  height: ${Dimensions.get('window').height};
  padding-top: 20px;
`

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
