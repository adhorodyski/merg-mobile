import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateTag } from '../../actions/mergingActions'
import styled from 'styled-components/native'

import {
  Scrollable,
  ScrollTag,
  ScrollWord,
  ScrollWordActive,
} from '../Shared/UI'

const StyledScrollable = styled(Scrollable)`
  margin: 0 30px 20px 30px;
  height: 80px;
`

class Tags extends PureComponent {
  onTagPress = async value => {
    await this.props.updateTag(value)
    this.forceUpdate()
  }

  renderTags = () => {
    const { tags, creatorsTags } = this.props

    return tags.map(tag => {
      return (
        <ScrollTag
          key={tag}
          onPress={() => this.onTagPress(tag)}
          underlayColor={'transparent'}>
          {
            creatorsTags.includes(tag)
            ? <ScrollWordActive>{tag}</ScrollWordActive>
            : <ScrollWord>{tag}</ScrollWord>
          }
        </ScrollTag>
      )
    })
  }

  render() {
    return (
      <StyledScrollable
        horizontal={true}
        ref={scrollView => { this.scrollView = scrollView }}
        showsHorizontalScrollIndicator={false}
      >
        { this.renderTags() }
      </StyledScrollable>
    )
  }
}

const mapStateToProps = state => ({
  creatorsTags: state.merging.creatorsTags,
  tags: state.explore.tags
})

export default connect(
    mapStateToProps,
    {
      updateTag
    }
  )(Tags)
