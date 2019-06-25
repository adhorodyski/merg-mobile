import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  getLoginEmail,
  getLoginPassword,
  loginUser
} from '../../actions/loginFormActions'
import { KeyboardAvoidingView } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { palette } from '../Shared/palette'
import { Ionicons } from '@expo/vector-icons'

import {
  Main,
  Tile,
  PosedButton,
  BtnText,
  WideInput
} from '../Shared/UI'

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
  constructor(props) {
    super(props)
    this.state = { isPressed: false }
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
                color={`${palette.lightText}`} />
              <WideInput
                onChangeText={value => getLoginEmail(value)}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.refs.password.focus()
                }}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                placeholder='doe@mail.com'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <Tile>
              <IconLock
                name="ios-lock"
                size={20}
                color={`${palette.lightText}`} />
              <WideInput
                onChangeText={value => getLoginPassword(value)}
                ref='password'
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='• • • • • • •|'
                placeholderTextColor={`${palette.lightText}`} />
            </Tile>
            <PosedButton
              isPressed={isPressed}
              pose={isPressed ? 'press' : 'init'}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onPress={() => loginUser(navigation)}
              activeOpacity={1}
              underlayColor={palette.darkBlue}>
              <BtnText>
                sign in
              </BtnText>
            </PosedButton>
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
