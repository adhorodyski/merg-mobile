import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  fetchMerging,
  authFacebook,
  authTwitter,
  authInstagram,
  authYoutube,
  authSpotify,
  authTumblr
} from '../../actions/mergingActions'
import { View, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { palette } from '../Shared/palette'

const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')

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
  background: ${p =>
    p.active
    ? `${palette.mediumBlue}`
    : `${palette.lightGray}`};
  box-shadow: 0 2px 2px ${p =>
    p.active
    ? 'rgba(41, 71, 242, 0.4)'
    : 'rgba(33, 33, 33, 0.03)'};
  border-radius: 10px;
  margin: 10px;
`

const Img = styled.Image`
  height: 50px;
  width: 50px;
  margin: auto;
`

class Socials extends PureComponent {
  handleFacebook = async () => {
    const { facebook } = this.props
    if (!facebook) {
      await this.props.authFacebook()
      await this.props.fetchMerging()
    }
  }

  handleTwitter = async () => {
    const { twitter } = this.props
    if (!twitter) {
      await this.props.authTwitter()
      await this.props.fetchMerging()
    }
  }

  handleInstagram = async () => {
    const { instagram } = this.props
    if (!instagram) {
      await this.props.authInstagram()
      await this.props.fetchMerging()
    }
  }

  handleYoutube = async () => {
    const { youtube } = this.props
    if (!youtube) {
      await this.props.authYoutube()
      await this.props.fetchMerging()
    }
  }

  handleSpotify = async () => {
    const { spotify } = this.props
    if (!spotify) {
      await this.props.authSpotify()
      await this.props.fetchMerging()
    }
  }

  handleTumblr = async () => {
    const { tumblr } = this.props
    if (!tumblr) {
      await this.props.authTumblr()
      await this.props.fetchMerging()
    }
  }


  render() {
    const {
      facebook,
      twitter,
      instagram,
      spotify,
      tumblr,
      youtube
    } = this.props

    return (
      <CenteredGrid>
        <Cell
          active={facebook}
          onPress={() => this.handleFacebook()}>
          <Img source={FacebookLogo} />
        </Cell>
        <Cell
          active={twitter}
          onPress={() => this.handleTwitter()}>
          <Img source={TwitterLogo} />
        </Cell>
        <Cell
          active={instagram}
          onPress={() => this.handleInstagram()}>
          <Img source={InstagramLogo} />
        </Cell>
        <Cell
          active={youtube}
          onPress={() => this.handleYoutube()}>
          <Img source={YoutubeLogo} />
        </Cell>
        <Cell
          active={spotify}
          onPress={() => this.handleSpotify()}>
          <Img source={SpotifyLogo} />
        </Cell>
        <Cell
          active={tumblr}
          onPress={() => this.handleTumblr()}>
          <Img source={TumblrLogo} />
        </Cell>
      </CenteredGrid>
    )
  }
}

const mapStateToProps = state => ({
  facebook: state.merging.facebook,
  twitter: state.merging.twitter,
  instagram: state.merging.instagram,
  spotify: state.merging.spotify,
  tumblr: state.merging.tumblr,
  youtube: state.merging.youtube
})

export default connect(
    mapStateToProps,
    {
      fetchMerging,
      authFacebook,
      authTwitter,
      authInstagram,
      authYoutube,
      authSpotify,
      authTumblr
    }
  )(Socials)
