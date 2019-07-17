import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  getRegisterFirstName,
  getRegisterUsername,
  getRegisterEmail,
  getRegisterPassword,
  getRegisterPasswordMatch,
  registerUser
} from '../../actions/registerFormActions'
import { KeyboardAvoidingView } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { palette } from '../Shared/palette'

import {
  Main,
  PosedButton,
  BtnText,
  Tile,
  WideInput
} from '../Shared/UI'
import { Form, IconMail, IconLock } from './SignIn'
import { StyledLabelWide } from './PrimaryChoice'

const AdjustedForm = styled(Form)`
  margin: 0;
  padding: 80px 20px 0 20px;
`

const AdjustedLabel = styled(StyledLabelWide)`
  text-align: left;
  font-size: 11px;
  margin: 10px 0 5px 0;
`

class FollowerRegisterScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isPressed: false
    }
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
      navigation,
      getRegisterFirstName,
      getRegisterUsername,
      getRegisterEmail,
      getRegisterPassword,
      getRegisterPasswordMatch,
      submitRegister
    } = this.props

    return (
      <Main keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView
          behavior="position"
          enabled>
          <AdjustedForm>
            <Tile>
              <IconMail
                name="ios-contact"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                returnKeyType={'next'}
                onChangeText={value => getRegisterFirstName(value)}
                onSubmitEditing={() => {
                  this.refs.username.focus()
                }}
                blurOnSubmit={false}
                textContentType={'givenName'}
                placeholder='first name'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <Tile>
              <IconMail
                name="ios-contact"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                ref='username'
                returnKeyType={'next'}
                onChangeText={value => getRegisterUsername(value)}
                onSubmitEditing={() => {
                  this.refs.email.focus()
                }}
                blurOnSubmit={false}
                textContentType={'username'}
                placeholder='username'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <Tile>
              <IconMail
                name="ios-at"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                ref='email'
                returnKeyType={'next'}
                onChangeText={value => getRegisterEmail(value)}
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
                blurOnSubmit={false}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                placeholder='e-mail'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <AdjustedLabel>
              Min. of 8 characters
              {'\n'}
              Include numbers and capital letters
            </AdjustedLabel>
            <Tile>
              <IconLock
                name="ios-lock"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                ref='password'
                returnKeyType={'next'}
                onChangeText={value => getRegisterPassword(value)}
                onSubmitEditing={() => {
                  this.refs.confirmPassword.focus()
                }}
                blurOnSubmit={false}
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='password'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <Tile>
              <IconLock
                name="ios-lock"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                ref='confirmPassword'
                secureTextEntry={true}
                onChangeText={value => getRegisterPasswordMatch(value)}
                textContentType={'password'}
                placeholder='confirm password'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <PosedButton
              isPressed={isPressed}
              pose={isPressed ? 'press' : 'init'}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              activeOpacity={1}
              underlayColor={palette.darkBlue}
              onPress={() => submitRegister(navigation)}>
              <BtnText>
                sign up
              </BtnText>
            </PosedButton>
            <AdjustedLabel>
              By signing up, you agree to our Terms. In Privacy Policy you can learn how we store and use your data with things like cookies only to provide You the best possible service.
            </AdjustedLabel>
          </AdjustedForm>
        </KeyboardAvoidingView>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  firstName: state.registerForm.email,
  username: state.registerForm.username,
  email: state.registerForm.email,
  password: state.registerForm.password,
  passwordMatch: state.registerForm.passwordMatch
})

export default withNavigation(connect(
  mapStateToProps,
  {
    getRegisterFirstName,
    getRegisterUsername,
    getRegisterEmail,
    getRegisterPassword,
    getRegisterPasswordMatch,
    registerUser
  }
)(FollowerRegisterScreen))
