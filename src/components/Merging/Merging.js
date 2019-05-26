import React, { PureComponent } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { Main } from '../Home/Home'
import {
  Button,
  BtnText,
  Scrollable,
  ScrollTag,
  ScrollWord,
  DarkLabel
} from '../Reusable/UI'
const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')

const StyledMain = styled(Main)`
  padding-top: 30px;
`

const CenteredGrid = styled.View`
  width: 100%;
  margin: 20px auto 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const Cell = styled.TouchableOpacity`
  height: 90px;
  width: 90px;
  background: #FAFAFA;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
  border-radius: 10px;
  margin: 10px;
`

const Img = styled.Image`
  height: 50px;
  width: 50px;
  margin: auto;
`

const StyledScrollable = styled(Scrollable)`
  margin: 0 30px 20px 30px;
  height: 80px;
`

class MergingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['Music', 'Sport', 'Technology', 'Food', 'Nature', 'Television', 'Lifestyle', 'Vlogs', 'Fashion', 'Travel', 'AI', 'Games']
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
    const { navigation } = this.props
    return (
      <StyledMain>
        <DarkLabel>
          Choose streams to merge for your followers
        </DarkLabel>
        <CenteredGrid>
          <Cell>
            <Img source={FacebookLogo} />
          </Cell>
          <Cell>
            <Img source={TwitterLogo} />
          </Cell>
          <Cell>
            <Img source={InstagramLogo} />
          </Cell>
          <Cell>
            <Img source={YoutubeLogo} />
          </Cell>
          <Cell>
            <Img source={SpotifyLogo} />
          </Cell>
          <Cell>
            <Img source={TumblrLogo} />
          </Cell>
        </CenteredGrid>
        <DarkLabel>
          Pick tags which fits your content
        </DarkLabel>
        <StyledScrollable
          ref={scrollView => { this.scrollView = scrollView }}
          onContentSizeChange={() => {
            this.scrollView.scrollTo({ x: 5 })
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          { this.renderTags() }
        </StyledScrollable>
        <Button onPress={() => {
          const pushAction = StackActions.push({
            routeName: 'Welcome'
          })
          navigation.dispatch(pushAction)
        }}>
          <BtnText>
            continue
          </BtnText>
        </Button>
      </StyledMain>
    )
  }
}

export default withNavigation(MergingScreen)
