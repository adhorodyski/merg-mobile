import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import * as theme from '../Shared/themes'

const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')

const StyledWrapper = styled.View`
  display: flex;
  margin: 20px auto 10px auto;
  flex-direction: row;
  background: blue;
  background: ${theme.overlayBackgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 3px ${theme.smallShadowColor};
`

const Provider = styled.Image`
  height: 25px;
  width: 25px;
  margin: 10px;
`

class MergedWithGroup extends PureComponent {
  render() {
    const {
      facebook,
      twitter,
      instagram,
      youtube,
      spotify,
      tumblr
    } = this.props

    return (
      <StyledWrapper>
        {
          facebook &&
          <Provider source={FacebookLogo} aria-label='Facebook' />
        }
        {
          twitter &&
          <Provider source={TwitterLogo} aria-label='Twitter' />
        }
        {
          instagram &&
          <Provider source={InstagramLogo} aria-label='Instagram' />
        }
        {
          youtube &&
          <Provider source={YoutubeLogo} aria-label='Youtube' />
        }
        {
          spotify &&
          <Provider source={SpotifyLogo} aria-label='Spotify' />
        }
        {
          tumblr &&
          <Provider source={TumblrLogo} aria-label='Tumblr' />
        }
      </StyledWrapper>
    )
  }
}

export default MergedWithGroup
