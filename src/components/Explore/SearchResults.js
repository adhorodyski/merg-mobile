import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import styled from 'styled-components'

import CreatorTile from './CreatorTile'

const StyledView = styled.View`
  margin-bottom: 50px;
`

class SearchResults extends PureComponent {
  renderResults = () => {
    const { results, follows, loggedUsername } = this.props

    return results.map((result, key) => {
      return <CreatorTile
                result={result}
                follows={follows}
                loggedUsername={loggedUsername}
                key={key} />
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

const mapStateToProps = state => ({
  results: state.explore.results,
  follows: state.loggedUser.user.follows,
  loggedUsername: state.loggedUser.user.username
})

export default connect(mapStateToProps)(SearchResults)
