import React, { PureComponent } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text
} from 'react-native'
import { withNavigation, StackActions } from 'react-navigation'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import * as theme from '../Shared/themes'

const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')

const StyledResultTile = styled.View`
  width: 95%;
  margin: 0 auto;
  min-height: 100px;
  display: flex;
  flex-direction: row;
`

const AvatarWrapper = styled.View`
  height: 60px;
  width: 60px;
  margin: auto 10px;
  border-radius: 30px;
  box-shadow: 0 4px 5px ${theme.mediumShadowColor};
`

const Avatar = styled.Image`
  height: 100%;
  width: 100%;
  background: ${theme.baseBackgroundColor};
  border-radius: 30px;
`

const InfoContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Name = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.primaryTextColor};
  margin: auto 0 0 0;
  width: 250px;
`

const FollowersCounter = styled.Text`
  margin: 0;
`

const CounterSpan = styled.Text`
  font-size: 13px;
  font-weight: normal;
  color: ${theme.secondaryTextColor};
  margin: 0 0 auto 0;
`

const FlexView = styled.View`
  display: flex;
  align-self: center;
`

const MergedGroup = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`

const Provider = styled.Image`
  height: 20px;
  width: 20px;
  margin: auto 0;
  margin-right: 10px;
`

class CreatorTile extends PureComponent {
  render() {
    const {
      navigation,
      result: {
        facebook,
        twitter,
        instagram,
        youtube,
        spotify,
        tumblr,
        local: {
          photo,
          nameDisplayed,
          username,
          followers
        }
      }
    } = this.props

    return (
      <StyledResultTile>
          <TouchableWithoutFeedback
            onPress={() => {
              const pushAction = StackActions.push({
                routeName: 'ProfileOverlay',
                params: {
                  username: username,
                }
              })
              navigation.dispatch(pushAction)
          }}>
            <InfoContainer>
              <AvatarWrapper>
                <Avatar source={{uri: photo}} />
              </AvatarWrapper>
              <FlexView>
                <Name numberOfLines={1}>{nameDisplayed}</Name>
                <FollowersCounter>
                  <CounterSpan>
                    {followers.length} followers
                  </CounterSpan>
                </FollowersCounter>
                <MergedGroup>
                  {facebook && <Provider source={FacebookLogo} />}
                  {twitter && <Provider source={TwitterLogo} />}
                  {instagram && <Provider source={InstagramLogo} />}
                  {youtube && <Provider source={YoutubeLogo} />}
                  {spotify && <Provider source={SpotifyLogo} />}
                  {tumblr && <Provider source={TumblrLogo} />}
                </MergedGroup>
              </FlexView>
            </InfoContainer>
          </TouchableWithoutFeedback>
      </StyledResultTile>
    )
  }
}

export default withNavigation(CreatorTile)
