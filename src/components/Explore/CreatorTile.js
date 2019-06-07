import React, { PureComponent } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text
} from 'react-native'
import { withNavigation, StackActions } from 'react-navigation'
import styled from 'styled-components'

import { Button, BtnText } from '../Shared/UI'

const FacebookLogo = require('../../../assets/social-media/facebook.png')
const TwitterLogo = require('../../../assets/social-media/twitter.png')
const InstagramLogo = require('../../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../../assets/social-media/spotify.png')
const TumblrLogo = require('../../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../../assets/social-media/youtube.png')

const StyledResultTile = styled.View`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
  min-height: 100px;
  background: #FAFAFA;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

const TopWrapper = styled.View`
  height: 60px;
  padding: 0 10px;
  display: flex;
`

const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  background: #F0F0F0;
  margin: auto 10px auto 0;
  border-radius: 18px;
`

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin: auto 0 0 0;
`

const FollowersCounter = styled.Text`
  margin: 0;
`

const CounterSpan = styled.Text`
  font-size: 13px;
  font-weight: normal;
  color: #818181;
  margin: 0 0 auto 0;
`

const FlexView = styled.View`
  display: flex;
  align-self: center;
`

const MergedGroup = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 45px;
`

const Provider = styled.Image`
  height: 20px;
  width: 20px;
  margin: auto 0;
  margin-right: 10px;
`

const BottomWrapper = styled.View`
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const StyledButton = styled(Button)`
  width: 75px;
  margin: auto 0;
`

class CreatorTile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFollowing: false,
      ownProfile: false
    }
  }

  componentDidMount = () => {
    const { loggedUsername, result: { local: { username } } } = this.props

    this.setState(
      { ownProfile: (loggedUsername === username) && true },
      () => { this.checkFollow() }
    )
  }

  checkFollow = async () => {
    const { isFollowing } = this.state
    const { follows, result: { _id } } = this.props

    for await (const e of follows) {
      if(e.creatorID === _id) {
        this.setState({
          isFollowing: !isFollowing
        })
      }
    }
  }

  render() {
    const { isFollowing, ownProfile } = this.state
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
        <TopWrapper>
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
              <Avatar source={{uri: photo}} />
              <FlexView>
                <Name>{nameDisplayed}</Name>
                <FollowersCounter ownProfile={ownProfile}>
                  <CounterSpan>
                    {followers.length} followers
                  </CounterSpan>
                </FollowersCounter>
              </FlexView>
            </InfoContainer>
          </TouchableWithoutFeedback>
        </TopWrapper>
        <BottomWrapper>
          <MergedGroup>
            {facebook && <Provider source={FacebookLogo} />}
            {twitter && <Provider source={TwitterLogo} />}
            {instagram && <Provider source={InstagramLogo} />}
            {youtube && <Provider source={YoutubeLogo} />}
            {spotify && <Provider source={SpotifyLogo} />}
            {tumblr && <Provider source={TumblrLogo} />}
          </MergedGroup>
          {
            !ownProfile &&
            <StyledButton>
              <BtnText>
                merge
              </BtnText>
            </StyledButton>
          }
        </BottomWrapper>
      </StyledResultTile>
    )
  }
}

export default withNavigation(CreatorTile)
