import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'

const Input = styled.TextInput`
  height: 45px;
  background: #ffffff;
  display: flex;
  margin: 10px 10px 0 10px;
  padding: 5px 30px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #333333;
`

class Searchbox extends PureComponent {
  render() {
    return (
      <Input placeholder='Whatever!' />
    )
  }
}

export default Searchbox
