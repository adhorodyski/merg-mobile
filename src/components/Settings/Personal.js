import React, { PureComponent } from 'react'

import {
  StyledView,
  Button,
  BtnText,
  Tile,
  Title,
  Input,
  InputHigh,
  SmallLabel,
  FixedSmallLabel
} from '../Reusable/UI'

class Personal extends PureComponent {
  render() {
    return (
      <StyledView>
        <Title>Personal</Title>
        <Tile>
          <SmallLabel>Name</SmallLabel>
          <Input placeholder='Mystery Guitar Man' />
        </Tile>
        <Tile>
          <SmallLabel>Username</SmallLabel>
          <Input placeholder='mgmflavor' />
        </Tile>
        <Tile>
          <SmallLabel>E-mail</SmallLabel>
          <Input
            keyboardType={'email-address'}
            placeholder='mgm@mail.com' />
        </Tile>
        <Tile>
          <FixedSmallLabel>About</FixedSmallLabel>
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
