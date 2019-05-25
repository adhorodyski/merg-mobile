import React, { PureComponent } from 'react'
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
    const { navigation } = this.props
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
                ref='password'
                secureTextEntry={true}
                textContentType={'password'}
                placeholder='• • • • • • •|' />
            </Tile>
            <Button onPress={() => {
                navigation.navigate('Home')
              }}>
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

export default withNavigation(SignInScreen)
