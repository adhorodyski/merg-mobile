import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  getCreatorRegisterNameDisplayed,
  getCreatorRegisterUsername,
  getCreatorRegisterEmail,
  getCreatorRegisterPassword,
  getCreatorRegisterPasswordMatch,
  registerCreator
} from '../../actions/registerCreatorFormActions'
import { Text, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { Main } from '../Home/Home'
import {
  Button,
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

class CreatorRegisterScreen extends PureComponent {
  render() {
    const {
      navigation,
      getCreatorRegisterNameDisplayed,
      getCreatorRegisterUsername,
      getCreatorRegisterEmail,
      getCreatorRegisterPassword,
      getCreatorRegisterPasswordMatch,
      registerCreator
    } = this.props

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
                onChangeText={value => getCreatorRegisterNameDisplayed(value)}
                onSubmitEditing={() => {
                  this.refs.username.focus()
                }}
                blurOnSubmit={false}
                textContentType={'nickname'}
                placeholder='your well-known name' />
            </Tile>
            <Tile>
              <IconMail
                name="ios-contact"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                ref='username'
                onChangeText={value => getCreatorRegisterUsername(value)}
                onSubmitEditing={() => {
                  this.refs.email.focus()
                }}
                blurOnSubmit={false}
                returnKeyType={'next'}
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
                onChangeText={value => getCreatorRegisterEmail(value)}
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
                blurOnSubmit={false}
                returnKeyType={'next'}
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
                onChangeText={value => getCreatorRegisterPassword(value)}
                onSubmitEditing={() => {
                  this.refs.confirmPassword.focus()
                }}
                blurOnSubmit={false}
                returnKeyType={'next'}
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
                onChangeText={value => getCreatorRegisterPasswordMatch(value)}
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='confirm password' />
            </Tile>
            <Button onPress={() => registerCreator(navigation)}>
              <BtnText>
                continue
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
  nameDisplayed: state.registerCreatorForm.nameDisplayed,
  username: state.registerCreatorForm.username,
  email: state.registerCreatorForm.email,
  password: state.registerCreatorForm.password,
  passwordMatch: state.registerCreatorForm.passwordMatch
})

export default withNavigation(connect(
  mapStateToProps,
  {
    getCreatorRegisterNameDisplayed,
    getCreatorRegisterUsername,
    getCreatorRegisterEmail,
    getCreatorRegisterPassword,
    getCreatorRegisterPasswordMatch,
    registerCreator
  }
)(CreatorRegisterScreen))
