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
  render() {
    const {
      user: {
        firstName,
        username,
        profilePic,
        about,
        followers,
        follows,
        isFollowing,
        facebook,
        twitter,
        instagram,
        youtube,
        spotify,
        tumblr
      }
    } = this.props

    return (
      <StyledWrapper>
        <Basics
          firstName={firstName}
          username={username}
          profilePic={profilePic} />
        <Note
          about={about} />
        <Counters
          followers={followers}
          follows={follows} />
        <Actions
          isFollowing={isFollowing} />
        <MergedWithGroup
          facebook={facebook}
          twitter={twitter}
          instagram={instagram}
          youtube={youtube}
          spotify={spotify}
          tumblr={tumblr} />
      </StyledWrapper>
    )
  }
}

export default About
