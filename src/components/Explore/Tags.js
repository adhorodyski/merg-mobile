import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import {
  Scrollable,
  ScrollTag,
  ScrollWord
} from '../Shared/UI'

class Tags extends PureComponent {
  onPress = e => {
    console.log(e)
  }

  renderTags = () => {
    const { tags } = this.props

    return tags.map(tag => {
      return (
        <ScrollTag
          key={tag}
          onPress={() => this.onPress(tag)}
          underlayColor={'transparent'}>
          <ScrollWord>
            {tag}
          </ScrollWord>
        </ScrollTag>
      )
    })
  }

  render() {
    return (
      <Scrollable
        ref={scrollView => { this.scrollView = scrollView }}
        onContentSizeChange={() => {
          this.scrollView.scrollTo({ x: 5 })
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        { this.renderTags() }
      </Scrollable>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.explore.tags
})

export default connect(mapStateToProps)(Tags)
