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
  ScrollWord
} from '../Reusable/UI'
import { StyledLabel } from '../Settings/Logout'
const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')

const LabelContainer = styled.View`
  display: flex;
  align-items: center;
  max-width: 95%;
  margin: 20px 10px;
`

const Label = styled(StyledLabel)`
  text-align: center;
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
  margin: 0 20px;
  margin-bottom: 20px;
  height: 80px;
`

class MergingScreen extends PureComponent {
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
    const { navigation } = this.props
    return (
      <Main>
        <LabelContainer>
          <Label>
            Choose streams to merge for your followers
          </Label>
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
              <Img source={SpotifyLogo} />
            </Cell>
            <Cell>
              <Img source={TumblrLogo} />
            </Cell>
            <Cell>
              <Img source={YoutubeLogo} />
            </Cell>
          </CenteredGrid>
          <Label>
            Pick some tags which fits your content
          </Label>
          <StyledScrollable
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
        </LabelContainer>
      </Main>
    )
  }
}

export default withNavigation(MergingScreen)
