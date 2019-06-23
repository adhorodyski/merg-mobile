import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'

const Input = styled.TextInput`
  height: 45px;
  background: #FFFFFF;
  box-shadow: 0 10px 15px rgba(80, 80, 80, 0.15);
  display: flex;
  margin: 0 10px;
  padding: 5px 30px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #333333;
`

class Searchbox extends PureComponent {
  render() {
    return (
      <Input placeholder='Search whatever!' />
    )
  }
}

export default Searchbox
