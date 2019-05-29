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

import {
  StyledView,
  Button,
  BtnText,
  Tile,
  Title,
  Input,
  InputHigh,
  SmallLabel,
  FixedSmallLabel
} from '../Reusable/UI'

class Personal extends PureComponent {
  componentDidMount = () => {
    this.props.hydrateInitial()
  }

  render() {
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
            defaultValue={nameValue} />
        </Tile>
        <Tile>
          <SmallLabel>Username</SmallLabel>
          <Input
            onChangeText={value => updateUsername(value)}
            placeholder='mgmflavor'
            defaultValue={usernameValue} />
        </Tile>
        <Tile>
          <SmallLabel>E-mail</SmallLabel>
          <Input
            onChangeText={value => updateEmail(value)}
            keyboardType={'email-address'}
            placeholder='mgm@mail.com'
            defaultValue={emailValue} />
        </Tile>
        <Tile>
          <FixedSmallLabel>About</FixedSmallLabel>
          <InputHigh
            onChangeText={value => updateAbout(value)}
            multiline={true}
            placeholder='My little note!'
            defaultValue={aboutValue} />
        </Tile>
        <Button
          success={success}
          onPress={() => sendPersonalForm()}>
          <BtnText>save</BtnText>
        </Button>
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
