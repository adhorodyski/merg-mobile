import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  hydrateInitial,
  updateName,
  updateUsername,
  updateEmail,
  updateAbout,
  sendPersonalForm
} from '../../actions/settingsActions'
import { palette } from '../Shared/palette'

import {
  StyledView,
  PosedButtonSuccess,
  BtnText,
  Tile,
  Title,
  Input,
  InputHigh,
  SmallLabel,
  FixedSmallLabel
} from '../Shared/UI'

class Personal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isPressed: false }
  }

  componentDidMount = async () => {
    await this.props.hydrateInitial()
  }

  handlePressIn = () => {
    this.setState({ isPressed: true })
  }

  handlePressOut = () => {
    this.setState({ isPressed: false })
  }

  render() {
    const { isPressed } = this.state
    const {
      nameValue,
      usernameValue,
      emailValue,
      aboutValue,
      success,
      updateName,
      updateUsername,
      updateEmail,
      updateAbout,
      sendPersonalForm
    } = this.props

    return (
      <StyledView>
        <Title>Personal</Title>
        <Tile>
          <SmallLabel>Name</SmallLabel>
          <Input
            onChangeText={value => updateName(value)}
            placeholder='Mystery Guitar Man'
            placeholderTextColor={`${palette.lightText}`}
            defaultValue={nameValue} />
        </Tile>
        <Tile>
          <SmallLabel>Username</SmallLabel>
          <Input
            onChangeText={value => updateUsername(value)}
            placeholder='mgmflavor'
            placeholderTextColor={`${palette.lightText}`}
            defaultValue={usernameValue} />
        </Tile>
        <Tile>
          <SmallLabel>E-mail</SmallLabel>
          <Input
            onChangeText={value => updateEmail(value)}
            keyboardType={'email-address'}
            placeholder='mgm@mail.com'
            placeholderTextColor={`${palette.lightText}`}
            defaultValue={emailValue} />
        </Tile>
        <Tile>
          <FixedSmallLabel>About</FixedSmallLabel>
          <InputHigh
            onChangeText={value => updateAbout(value)}
            multiline={true}
            placeholder='My little note!'
            placeholderTextColor={`${palette.lightText}`}
            defaultValue={aboutValue} />
        </Tile>
        <PosedButtonSuccess
          success={success}
          isPressed={isPressed}
          pose={isPressed ? 'press' : 'init'}
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          activeOpacity={1}
          underlayColor={palette.darkBlue}
          onPress={() => sendPersonalForm()}>
          <BtnText>save</BtnText>
        </PosedButtonSuccess>
      </StyledView>
    )
  }
}

const mapStateToProps = state => ({
  nameValue: state.settings.personal.nameValue,
  usernameValue: state.settings.personal.usernameValue,
  emailValue: state.settings.personal.emailValue,
  aboutValue: state.settings.personal.aboutValue,
  success: state.settings.personal.success
})

export default connect(
  mapStateToProps,
  {
    hydrateInitial,
    updateName,
    updateUsername,
    updateEmail,
    updateAbout,
    sendPersonalForm
  }
)(Personal)
