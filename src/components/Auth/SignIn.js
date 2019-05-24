import React, { PureComponent } from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { Main } from '../Home/Home'
import {
  StyledView,
  Title,
  Tile,
  Input,
  Button,
  BtnText
} from '../Settings/Personal'

const Form = styled.View`
  padding: 20px;
  display: flex;
  margin: 180px 0;
`

const StyledInput = styled(Input)`
  width: 100%;
  padding: 0 0 0 40px;
`

const Icon = styled(Ionicons)`
  position: absolute;
  top: 15px;
  left: 20px;
`

const IconLock = styled(Icon)`
  left: 22px;
`

class SignInScreen extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <Main>
        <Form>
          <Tile>
            <Icon name="ios-mail" size={20} color="rgba(33, 33, 33, 0.4)" />
            <StyledInput
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              placeholder='doe@mail.com' />
          </Tile>
          <Tile>
            <IconLock name="ios-lock" size={20} color="rgba(33, 33, 33, 0.4)" />
            <StyledInput
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
