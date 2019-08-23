import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Basics from './Basics'
import Note from './Note'
import Actions from './Actions'
import Counters from './Counters'
import MergedWithGroup from './MergedWithGroup'

const StyledWrapper = styled.View`
  width: 100%;
  display: flex;
`

class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isStreamcountExpanded: false
    }
  }

  expandStreamcount = () => {
    const { isStreamcountExpanded } = this.state
    this.setState({ isStreamcountExpanded: !isStreamcountExpanded })
  }

  render() {
    const {
      mode,
      isFollowing,
      user,
      user: {
        firstName,
        username,
        profilePic,
        about,
        followers,
        follows,
        facebook,
        twitter,
        instagram,
        youtube,
        spotify,
        tumblr
      }
    } = this.props
    const { isStreamcountExpanded } = this.state

    const streamsArray = [
      facebook, twitter, instagram, youtube, spotify, tumblr
    ]

    return (
      <StyledWrapper>
        <Basics
          firstName={firstName}
          username={username}
          profilePic={profilePic} />
        {
          about !== '' &&
          <Note
            about={about} />
        }
        <Counters
          followers={followers}
          follows={follows}
          streamsArray={streamsArray}
          isStreamcountExpanded={isStreamcountExpanded}
          expandStreamcount={this.expandStreamcount} />
        {
          isStreamcountExpanded &&
          <MergedWithGroup
            facebook={facebook}
            twitter={twitter}
            instagram={instagram}
            youtube={youtube}
            spotify={spotify}
            tumblr={tumblr} />
        }
        <Actions
          user={user}
          mode={mode}
          follows={follows}
          isFollowing={isFollowing} />
      </StyledWrapper>
    )
  }
}

export default About
