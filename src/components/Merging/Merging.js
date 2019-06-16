import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import {
  fetchMerging,
  authFacebook,
  authTwitter,
  authInstagram,
  authYoutube,
  authSpotify,
  authTumblr
} from '../../actions/mergingActions'
import { WebBrowser } from 'expo'
import { View, Image, TouchableOpacity } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { palette } from '../Shared/palette'
import * as base from '../../variables'

import {
  Main,
  PosedButton,
  BtnText,
  Scrollable,
  ScrollTag,
  ScrollWord,
  DarkLabel
} from '../Shared/UI'
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
  background: ${p => p.active ? '#2947F2' : '#FAFAFA'};
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

const StyledScrollable = styled(Scrollable)`
  margin: 0 30px 20px 30px;
  height: 80px;
`

class MergingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['Music', 'Sport', 'Technology', 'Food', 'Nature', 'Television', 'Lifestyle', 'Vlogs', 'Fashion', 'Travel', 'AI', 'Games'],
      isPressed: false
    }
  }

  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchMerging()
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

  handlePressIn = () => {
    this.setState({ isPressed: true })
  }

  handlePressOut = () => {
    this.setState({ isPressed: false })
  }

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
      navigation,
      letContinue,
      facebook,
      twitter,
      instagram,
      spotify,
      tumblr,
      youtube,
      isCreator
    } = this.props
    const { isPressed } = this.state

    return (
      <StyledMain>
        <DarkLabel>
          Choose streams to merge for your followers
        </DarkLabel>
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
        <PosedButton
          isPressed={isPressed}
          pose={isPressed ? 'press' : 'init'}
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          activeOpacity={1}
          underlayColor={palette.darkBlue}
          onPress={() => {
          const pushAction = StackActions.push({
            routeName: 'Welcome'
          })
          navigation.dispatch(pushAction)
        }}>
          <BtnText>
            continue
          </BtnText>
        </PosedButton>
      </StyledMain>
    )
  }
}

const mapStateToProps = state => ({
  facebook: state.merging.facebook,
  twitter: state.merging.twitter,
  instagram: state.merging.instagram,
  spotify: state.merging.spotify,
  tumblr: state.merging.tumblr,
  youtube: state.merging.youtube,
  letContinue: state.merging.letContinue,
  isCreator: state.auth.isCreator
})

export default withNavigation(connect(
    mapStateToProps,
    {
      fetchAuth,
      fetchLoggedUser,
      fetchMerging,
      authFacebook,
      authTwitter,
      authInstagram,
      authYoutube,
      authSpotify,
      authTumblr
    }
  )(MergingScreen))
