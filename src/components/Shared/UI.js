import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { palette } from './palette'

export const Main = styled.ScrollView`
  background: ${palette.mediumGray};
`

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
  background: ${palette.mediumBlue};
  border: none;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;
  box-shadow: 0 2px 2px rgba(41, 71, 242, 0.3);
`

export const BtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${palette.lightGray};
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
  background: ${palette.lightGray};
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(33, 33, 33, 0.03);
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${palette.darkText};
  margin: 10px;
`

export const Input = styled.TextInput`
  background: transparent;
  height: 100%;
  width: 65%;
  font-weight: bold;
  font-size: 16px;
  color: ${palette.darkText};
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
  color: ${palette.lightText};
  margin: auto 10px auto 0;
  max-width: 100px;
`

export const FixedSmallLabel = styled(SmallLabel)`
  margin: 15px 10px auto 0;
`

export const BigLabel = styled(SmallLabel)`
  color: ${palette.darkText};
  font-size: 16px;
  max-width: 100%;
`

export const DarkLabel = styled(SmallLabel)`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 95%;
  color: ${palette.mediumBlue};
  margin: 0;
  padding: 10px 20px;
`

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  display: flex;
  background: ${palette.white};
  margin: 10px auto;
  border-radius: 35px;
`

export const AvatarSmall = styled(Avatar)`
  height: 30px;
  width: 30px;
  margin: auto 10px;
  border-radius: 15px;
`

export const Scrollable = styled.ScrollView`
  height: 50px;
  margin: 0 10px;
  display: flex;
`

export const ScrollTag = styled.TouchableHighlight`
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
`

export const ScrollWord = styled.Text`
  color: ${palette.lightText};
  font-size: 16px;
  font-weight: bold;
`
