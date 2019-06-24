import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStories } from '../../actions/userStoriesActions'
import { withNavigation, StackActions } from 'react-navigation'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import {
  Scrollable,
  ScrollElemSmall,
  ScrollImgWrap,
  ScrollImg
} from '../Shared/UI'

const StyledScrollable = styled(Scrollable)`
  height: 80px;
  padding: 0 10px;
  margin: 0;
  margin-bottom: 10px;
`

const StyledScrollElemSmall = styled(ScrollElemSmall)`
  padding: 10px 10px 10px 0;
  margin-right: 10px;
`

class Stories extends PureComponent {
  componentDidUpdate = async () => {
    await this.props.getStories()
  }

  renderStories = () => {
    const { stories, navigation } = this.props

    return stories.map((story, key) => {
      const { authorUsername, authorPic, provider } = story

      return (
        <StyledScrollElemSmall
          key={key}
          underlayColor={'transparent'}
          onPress={() => {
            const pushAction = StackActions.push({
              routeName: 'ProfileOverlay',
              params: {
                username: authorUsername,
              }
            })
            navigation.dispatch(pushAction)
          }}>
          <ScrollImgWrap provider={provider}>
            <ScrollImg source={{ uri: authorPic }} />
          </ScrollImgWrap>
        </StyledScrollElemSmall>
      )
    })
  }

  render() {
    return (
      <StyledScrollable
        ref={scrollView => { this.scrollView = scrollView }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        { this.renderStories() }
      </StyledScrollable>
    )
  }
}

const mapStateToProps = state => ({
  fullOcean: state.userOcean.fullOcean,
  stories: state.userStories.stories
})

export default withNavigation(connect(
  mapStateToProps,
  {
    getStories
  }
)(Stories))
