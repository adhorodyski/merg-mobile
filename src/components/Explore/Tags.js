import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import {
  Scrollable,
  ScrollElemSmall,
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
        <ScrollElemSmall
          key={tag}
          onPress={() => this.onPress(tag)}
          underlayColor={'transparent'}>
          <ScrollWord>
            {tag}
          </ScrollWord>
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
  tags: state.explore.tags
})

export default connect(mapStateToProps)(Tags)
