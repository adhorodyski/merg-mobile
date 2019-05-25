import React, { PureComponent } from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { Main } from '../Home/Home'
import {
  Tile,
  Input,
  Button,
  BtnText
} from '../Settings/Personal'

export const Form = styled.View`
  padding: 20px;
  display: flex;
  margin: 180px 0;
`

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 0 0 0 40px;
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
        <Form>
          <Tile>
            <IconMail
              name="ios-at"
              size={20}
              color="rgba(33, 33, 33, 0.4)" />
            <StyledInput
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
            <StyledInput
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
      </Main>
    )
  }
}

export default withNavigation(SignInScreen)
