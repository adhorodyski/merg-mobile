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
    return (
      <StyledWrapper>
        <Basics />
        <Note />
        <Counters />
        <Actions />
        <MergedWithGroup />
      </StyledWrapper>
    )
  }
}

export default About
