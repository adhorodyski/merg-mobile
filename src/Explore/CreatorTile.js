import React, { PureComponent } from 'react'
import { View, TouchableHighlight, Image, Text } from 'react-native'
import styled from 'styled-components'

const FacebookLogo = require('../../assets/social-media/facebook.png')
const TwitterLogo = require('../../assets/social-media/twitter.png')
const InstagramLogo = require('../../assets/social-media/instagram.png')
const SpotifyLogo = require('../../assets/social-media/spotify.png')
const TumblrLogo = require('../../assets/social-media/tumblr.png')
const YoutubeLogo = require('../../assets/social-media/youtube.png')

const ResultTileStyled = styled.View`
  width: 100%;
  min-height: 100px;
  background: #FAFAFA;
  display: flex;
  border-top-width: 1px;
  border-top-color: rgba(51, 51, 51, 0.1);
`

const ResultTileInfo = styled.View`
  height: 60px;
  padding: 0 10px;
  display: flex;
`

const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  background: #FFFFFF;
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
  font-weight: bold;
  color: #818181;
  margin: 0 0 auto 0;
`

const FlexView = styled.View`
  display: flex;
  align-self: center;
`

const MergedWithGroup = styled.View`
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

const ResultTileActions = styled.View`
  height: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Button = styled.TouchableHighlight`
  width: 75px;
  height: 30px;
  background: #6332C4;
  border: none;
  border-radius: 10px;
  display: flex;
  margin: auto 0;
`

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FAFAFA;
  text-align: center;
  align-self: center;
  line-height: 30px;
`

class CreatorTile extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFollowing: false,
      ownProfile: false
    }
  }

  render() {
    const { isFollowing, ownProfile } = this.state
    return (
      <ResultTileStyled>
        <ResultTileInfo>
          <InfoContainer>
            <Avatar />
            <FlexView>
              <Name>Adam Horodyski</Name>
              <FollowersCounter ownProfile={ownProfile}>
                <CounterSpan>
                  245.645 people
                </CounterSpan>
              </FollowersCounter>
            </FlexView>
          </InfoContainer>
        </ResultTileInfo>
        <ResultTileActions>
          <MergedWithGroup>
            <Provider source={FacebookLogo} />
            <Provider source={TwitterLogo} />
            <Provider source={InstagramLogo} />
            <Provider source={YoutubeLogo} />
            <Provider source={SpotifyLogo} />
            <Provider source={TumblrLogo} />
          </MergedWithGroup>
          {
            !ownProfile &&
            <Button>
              <BtnText>
                merge
              </BtnText>
            </Button>
          }
        </ResultTileActions>
      </ResultTileStyled>
    )
  }
}

export default CreatorTile
