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

import { Main } from '../Home/Home'
import {
  Button,
  BtnText,
  Tile,
  WideInput
} from '../Reusable/UI'
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
  handleFirstName = value => {
    this.props.getRegisterFirstName(value)
  }

  handleUsername = value => {
    this.props.getRegisterUsername(value)
  }

  handleEmail = value => {
    this.props.getRegisterEmail(value)
  }

  handlePassword = value => {
    this.props.getRegisterPassword(value)
  }

  handlePasswordMatch = value => {
    this.props.getRegisterPasswordMatch(value)
  }

  submitRegister = () => {
    const { navigation } = this.props
    this.props.registerUser(navigation)
  }

  render() {
    const { navigation } = this.props
    return (
      <Main>
        <KeyboardAvoidingView
          behavior="position"
          enabled>
          <AdjustedForm>
            <Tile>
              <IconMail
                name="ios-contact"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                returnKeyType={'next'}
                onChangeText={value => this.handleFirstName(value)}
                onSubmitEditing={() => {
                  this.refs.username.focus()
                }}
                blurOnSubmit={false}
                textContentType={'givenName'}
                placeholder='first name' />
            </Tile>
            <Tile>
              <IconMail
                name="ios-contact"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                ref='username'
                returnKeyType={'next'}
                onChangeText={value => this.handleUsername(value)}
                onSubmitEditing={() => {
                  this.refs.email.focus()
                }}
                blurOnSubmit={false}
                textContentType={'username'}
                placeholder='username' />
            </Tile>
            <Tile>
              <IconMail
                name="ios-at"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                ref='email'
                returnKeyType={'next'}
                onChangeText={value => this.handleEmail(value)}
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
                blurOnSubmit={false}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                placeholder='e-mail' />
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
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                ref='password'
                returnKeyType={'next'}
                onChangeText={value => this.handlePassword(value)}
                onSubmitEditing={() => {
                  this.refs.confirmPassword.focus()
                }}
                blurOnSubmit={false}
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='password' />
            </Tile>
            <Tile>
              <IconLock
                name="ios-lock"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                ref='confirmPassword'
                secureTextEntry={true}
                onChangeText={value => this.handlePasswordMatch(value)}
                textContentType={'password'}
                placeholder='confirm password' />
            </Tile>
            <Button onPress={this.submitRegister}>
              <BtnText>
                sign up
              </BtnText>
            </Button>
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
