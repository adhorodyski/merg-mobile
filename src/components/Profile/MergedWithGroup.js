import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')

const StyledWrapper = styled.View`
  display: flex;
  margin: 20px auto;
  flex-direction: row;
`

const Provider = styled.Image`
  height: 25px;
  width: 25px;
  margin: 0 10px;
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
