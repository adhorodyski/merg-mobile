import React, { PureComponent } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { palette } from '../Shared/palette'

import { PosedButton, PosedSelectButton, BtnText } from '../Shared/UI'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px auto;
`

const StyledButton = styled(PosedButton)`
  margin: auto 20px;
`

const StyledPosedSelectButton = styled(PosedSelectButton)`
  margin: auto 20px;
`

class Actions extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFollowing: false,
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

  onFollow = () => {
    const { isFollowing } = this.state
    this.setState({ isFollowing: !isFollowing })
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
    const { isFollowing } = this.props
    
    return (
      <StyledWrapper>
        <StyledPosedSelectButton
          isPressed={isMergePressed}
          isFollowing={isFollowing}
          pose={isMergePressed ? 'press' : 'init'}
          onPressIn={this.handleMergePressIn}
          onPressOut={this.handleMergePressOut}
          onPress={() => this.onFollow()}
          activeOpacity={1}
          underlayColor={palette.darkBlue}>
          <BtnText>
            merge
          </BtnText>
        </StyledPosedSelectButton>
        <StyledButton
          isPressed={isTalkPressed}
          pose={isTalkPressed ? 'press' : 'init'}
          onPressIn={this.handleTalkPressIn}
          onPressOut={this.handleTalkPressOut}
          onPress={() => console.log('talk')}
          activeOpacity={1}
          underlayColor={palette.darkBlue}>
          <BtnText>
            talk to
          </BtnText>
        </StyledButton>
      </StyledWrapper>
    )
  }
}

export default Actions
