import React, { PureComponent } from 'react'
import { Text, View, TextInput } from 'react-native'
import styled from 'styled-components/native'

export const StyledView = styled.View`
  width: 95%;
  margin: 0 auto;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin: 10px;
`

export const Tile = styled.View`
  width: 100%;
  min-height: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  background: #FAFAFA;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

export const Label = styled.Text`
  font-size: 13px;
  line-height: 20px;
  font-weight: bold;
  color: #818181;
  margin: auto 10px auto 0;
  max-width: 100px;
`

const FixedLabel = styled(Label)`
  margin: 15px 10px auto 0;
`

const Input = styled.TextInput`
  background: transparent;
  height: 100%;
  width: 65%;
  font-weight: bold;
  font-size: 16px;
  color: #333333;
`

const InputHigh = styled(Input)`
  padding: 15px 0;
`

const Button = styled.TouchableHighlight`
  width: 100px;
  height: 30px;
  background: #59BEFF;
  border: none;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;
  box-shadow: 0 2px 2px rgba(89, 190, 255, 0.4);
`

const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FAFAFA;
  text-align: center;
  margin: auto;
  line-height: 30px;
`

class Personal extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>Personal</Title>
        <Tile>
          <Label>Name</Label>
          <Input placeholder='Mystery Guitar Man' />
        </Tile>
        <Tile>
          <Label>Username</Label>
          <Input placeholder='mgmflavor' />
        </Tile>
        <Tile>
          <Label>E-mail</Label>
          <Input
            keyboardType={'email-address'}
            placeholder='mgm@mail.com' />
        </Tile>
        <Tile>
          <FixedLabel>About</FixedLabel>
          <InputHigh
            multiline={true}
            placeholder='My little note!' />
        </Tile>
        <Button>
          <BtnText>save</BtnText>
        </Button>
      </StyledView>
    )
  }
}

export default Personal
