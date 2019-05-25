import React, { PureComponent } from 'react'
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
                textContentType={'password'}
                placeholder='confirm password' />
            </Tile>
            <Button onPress={() => {
                navigation.navigate('Home')
              }}>
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

export default withNavigation(FollowerRegisterScreen)
