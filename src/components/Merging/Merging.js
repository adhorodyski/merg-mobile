import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'
import { fetchMerging } from '../../actions/mergingActions'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { palette } from '../Shared/palette'

import {
  Main,
  PosedButton,
  BtnText,
  DarkLabel
} from '../Shared/UI'
import Socials from './Socials'
import Tags from './Tags'

const StyledMain = styled(Main)`
  padding-top: 30px;
`

class MergingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isPressed: false }
  }

  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
    await this.props.fetchMerging()
  }

  handlePressIn = () => {
    this.setState({ isPressed: true })
  }

  handlePressOut = () => {
    this.setState({ isPressed: false })
  }

  render() {
    const { navigation, letContinue } = this.props
    const { isPressed } = this.state

    return (
      <StyledMain>
        <DarkLabel>
          Choose streams to merge for your followers
        </DarkLabel>
        <Socials />
        <DarkLabel>
          Pick tags which fits your content
        </DarkLabel>
        <Tags />
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
  letContinue: state.merging.letContinue
})

export default withNavigation(connect(
    mapStateToProps,
    {
      fetchAuth,
      fetchLoggedUser,
      fetchMerging
    }
  )(MergingScreen))
