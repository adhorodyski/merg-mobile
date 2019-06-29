import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { applyExploreTag, searchWithTag } from '../../actions/exploreActions'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import {
  Scrollable,
  ScrollElemSmall,
  ScrollWord,
  ScrollWordActive
} from '../Shared/UI'

class Tags extends PureComponent {
  askTag = async value => {
    await this.props.applyExploreTag(value)
    await this.props.searchWithTag()
  }

  renderTags = () => {
    const { tags, exploreQuery } = this.props

    return tags.map(tag => {
      return (
        <ScrollElemSmall
          key={tag}
          onPress={() => this.askTag(tag)}
          underlayColor={'transparent'}>
          {
            exploreQuery === tag
            ? <ScrollWordActive>{tag}</ScrollWordActive>
            : <ScrollWord>{tag}</ScrollWord>
          }
        </ScrollElemSmall>
      )
    })
  }

  render() {
    return (
      <Scrollable
        ref={scrollView => { this.scrollView = scrollView }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        { this.renderTags() }
      </Scrollable>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.explore.tags,
  exploreQuery: state.explore.exploreQuery
})

export default connect(
  mapStateToProps,
  {
    applyExploreTag,
    searchWithTag
  }
)(Tags)
