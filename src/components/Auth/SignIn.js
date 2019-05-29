import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  getLoginEmail,
  getLoginPassword,
  loginUser
} from '../../actions/loginFormActions'
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { Main } from '../Home/Home'
import {
  Tile,
  Button,
  BtnText,
  WideInput
} from '../Reusable/UI'

export const Form = styled.View`
  padding: 20px;
  display: flex;
  margin: 180px 0;
`

export const IconMail = styled(Ionicons)`
  position: absolute;
  top: 15px;
  left: 20px;
`

export const IconLock = styled(IconMail)`
  left: 22px;
`

class SignInScreen extends PureComponent {
  render() {
    const {
      navigation,
      getLoginEmail,
      getLoginPassword,
      loginUser
    } = this.props
    
    return (
      <Main>
        <KeyboardAvoidingView
          behavior="position"
          enabled>
          <Form>
            <Tile>
              <IconMail
                name="ios-at"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                onChangeText={value => getLoginEmail(value)}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                placeholder='doe@mail.com' />
            </Tile>
            <Tile>
              <IconLock
                name="ios-lock"
                size={20}
                color="rgba(33, 33, 33, 0.4)" />
              <WideInput
                onChangeText={value => getLoginPassword(value)}
                ref='password'
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='• • • • • • •|' />
            </Tile>
            <Button onPress={() => loginUser(navigation)}>
              <BtnText>
                sign in
              </BtnText>
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  email: state.loginForm.email,
  password: state.loginForm.password
})

export default withNavigation(connect(
  mapStateToProps,
  {
    getLoginEmail,
    getLoginPassword,
    loginUser
  }
)(SignInScreen))
