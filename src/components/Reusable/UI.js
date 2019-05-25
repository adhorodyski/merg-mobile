import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const StyledView = styled.View`
  width: 95%;
  margin: 0 auto;
`

export const StyledViewMargin = styled(StyledView)`
  margin: 10px auto;
`

export const StyledViewMargin2 = styled(StyledView)`
  margin: 10px auto 30px auto;
`

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  background: #2446ff;
  border: none;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;
  box-shadow: 0 2px 2px rgba(36, 70, 255, 0.3);
`

export const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FAFAFA;
  text-align: center;
  margin: auto;
  line-height: 30px;
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

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin: 10px;
`

export const Input = styled.TextInput`
  background: transparent;
  height: 100%;
  width: 65%;
  font-weight: bold;
  font-size: 16px;
  color: #333333;
`

export const InputHigh = styled(Input)`
  padding: 15px 0;
`

export const WideInput = styled(Input)`
  width: 100%;
  padding: 0 0 0 40px;
`

export const SmallLabel = styled.Text`
  font-size: 13px;
  line-height: 20px;
  font-weight: bold;
  color: #818181;
  margin: auto 10px auto 0;
  max-width: 100px;
`

export const FixedSmallLabel = styled(SmallLabel)`
  margin: 15px 10px auto 0;
`

export const BigLabel = styled(SmallLabel)`
  color: #333333;
  font-size: 16px;
  max-width: 100%;
`

export const CenterBlueLabel = styled(SmallLabel)`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 95%;
  color: #2645ec;
`

export const Avatar = styled.Image`
  height: 75px;
  width: 75px;
  display: flex;
  background: #FFFFFF;
  margin: 10px auto;
  border-radius: 40px;
`
