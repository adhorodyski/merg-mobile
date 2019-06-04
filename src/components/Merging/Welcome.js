import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import {
  Main,
  Button,
  BtnText,
  DarkLabel
} from '../Shared/UI'
const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')
const Shout = require('../../../assets/shout.png')
const KnownFor = require('../../../assets/known-for.png')

const StyledMain = styled(Main)`
  padding: 20px;
`

const CenteredGrid = styled.View`
  width: 100%;
  margin: 0 auto 50px auto;
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.View`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #FAFAFA;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
  border-radius: 10px;
  margin: 10px auto 0 auto;
`

const Img = styled.Image`
  height: 40px;
  width: 40px;
  margin: auto;
`

const StyledDarkLabel = styled(DarkLabel)`
  margin: 0 auto 10px auto;
`

const Graphic = styled.Image`
  display: flex;
  height: 100px;
  width: 100px;
  margin: 0 auto 50px auto;
`

const StyledButton = styled(Button)`
  margin-bottom: 100px;
`

class WelcomeScreen extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <StyledMain>
        <StyledDarkLabel>
          Regardless of how many profiles you run,
          {'\n'}
          we believe that you are the one of a kind
        </StyledDarkLabel>
        <CenteredGrid>
          <Cell>
            <Img source={FacebookLogo} />
            <Img source={TwitterLogo} />
            <Img source={InstagramLogo} />
            <Img source={YoutubeLogo} />
            <Img source={TumblrLogo} />
            <Img source={SpotifyLogo} />
          </Cell>
        </CenteredGrid>
        <StyledDarkLabel>
          Forget about posting the same thing
          {'\n'}
          wherever you can, create where you like to
        </StyledDarkLabel>
        <Graphic source={Shout} />
        <StyledDarkLabel>
          Forget about anyone pretending
          {'\n'}
          to be you on the Internet
        </StyledDarkLabel>
        <Graphic source={KnownFor} />
        <DarkLabel>
          Let everyone get to know you better
        </DarkLabel>
        <StyledButton onPress={() => {
          navigation.navigate('Home')
        }}>
          <BtnText>
            merge
          </BtnText>
        </StyledButton>
      </StyledMain>
    )
  }
}

export default withNavigation(WelcomeScreen)
