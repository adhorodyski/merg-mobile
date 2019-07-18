import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { triggerFollow } from '../../actions/exploreActions'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import { Ionicons } from '@expo/vector-icons'

import { PosedButton, PosedSelectButton, BtnText } from '../Shared/UI'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto;
`

const StyledButton = styled(PosedButton)`
  margin: auto 20px;
`

const StyledPosedSelectButton = styled(PosedSelectButton)`
  margin: auto 20px;
`

const Icon = styled(Ionicons)`
  margin: auto 10px;
`

class Actions extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMergePressed: false,
      isTalkPressed: false
    }
  }

  handleMergePressIn = () => {
    this.setState({ isMergePressed: true })
  }

  handleMergePressOut = () => {
    this.setState({ isMergePressed: false })
  }

  onFollow = async () => {
    const {
      mode,
      isFollowing,
      user: {
        _id,
        firstName,
        profilePic,
        username,
        facebook,
        twitter,
        instagram,
        youtube,
        spotify,
        tumblr
      }
    } = this.props

    const followInformations = {
      isFollowing: !isFollowing,
      creatorID: _id,
      creatorUsername: username,
      creatorName: firstName,
      creatorPhoto: profilePic,
      creatorFacebook: facebook,
      creatorTwitter: twitter,
      creatorInstagram: instagram,
      creatorYoutube: youtube,
      creatorTumblr: tumblr,
      creatorSpotify: spotify
    }

    await this.props.triggerFollow(followInformations, mode)
    await this.props.fetchLoggedUser()
  }

  handleTalkPressIn = () => {
    this.setState({ isTalkPressed: true })
  }

  handleTalkPressOut = () => {
    this.setState({ isTalkPressed: false })
  }

  render() {
    const {
      isMergePressed,
      isTalkPressed
    } = this.state
    const {
      loggedUsername,
      isFollowing,
      user: {
        username
      }
    } = this.props

    if (loggedUsername !== username) {
      return (
        <StyledWrapper>
          <StyledPosedSelectButton
            isPressed={isMergePressed}
            isFollowing={isFollowing}
            pose={isMergePressed ? 'press' : 'init'}
            onPressIn={this.handleMergePressIn}
            onPressOut={this.handleMergePressOut}
            onPress={this.onFollow}
            activeOpacity={1}
            underlayColor={palette.darkBlue}>
            <BtnText>
              { isFollowing ? 'merged' : 'merge' }
            </BtnText>
          </StyledPosedSelectButton>
          <Icon
            name="ios-send"
            size={30}
            color={`${palette.mediumBlue}`} />
        </StyledWrapper>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  loggedUsername: state.loggedUser.user.username,
  loggedFollows: state.loggedUser.user.follows
})

export default connect(
  mapStateToProps,
  {
    fetchLoggedUser,
    triggerFollow
  }
)(Actions)
