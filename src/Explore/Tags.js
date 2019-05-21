import React, { PureComponent } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

const TagsContainer = styled.ScrollView`
  height: 50px;
  margin: 0 10px;
  display: flex;
  border-radius: 50px;
`

const Tag = styled.TouchableHighlight`
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
`

const Word = styled.Text`
  color: #818181;
  font-size: 16px;
  font-weight: bold;
`

class Tags extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['music', 'SF', 'sport', 'technology', 'vlogs', 'fashion', 'travel', 'AI', 'sorry-zuck']
    }
  }

  onPress = e => {
    console.log(e)
  }

  renderTags = () => {
    const { tags } = this.state

    return tags.map(tag => {
      return (
        <Tag
          key={tag}
          onPress={() => this.onPress(tag)}
          underlayColor={'transparent'}>
          <Word>
            {tag}
          </Word>
        </Tag>
      )
    })
  }

  render() {
    return (
      <TagsContainer
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        { this.renderTags() }
      </TagsContainer>
    )
  }
}

export default Tags
