import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import {
  Scrollable,
  ScrollTag,
  ScrollWord
} from '../Reusable/UI'

class Tags extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['Music', 'Sport', 'Technology', 'Food', 'Nature', 'Television', 'Lifestyle', 'Vlogs', 'Fashion', 'Travel', 'AI', 'SorryZuck']
    }
  }

  onPress = e => {
    console.log(e)
  }

  renderTags = () => {
    const { tags } = this.state

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
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        { this.renderTags() }
      </Scrollable>
    )
  }
}

export default Tags
