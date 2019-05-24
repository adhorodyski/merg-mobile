import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { StackActions, withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

import { Main } from '../Home/Home'
const DescribeRegular = require('../../../assets/describe-regular.png')
const DescribeCreator = require('../../../assets/describe-creator.png')

const Flex = styled.View`
  margin: 80px auto 10px auto;
  padding: 0 10px;
`

const Touch = styled.TouchableOpacity`
  display: flex;
  margin: 30px auto;
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 0 3px 2px rgba(33, 33, 33, 0.04);
`

const TouchEmpty = styled(Touch)`
  box-shadow: none;
  background: transparent;
  margin: 20px auto 0 auto;
`

const ButtonsGroup = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

const Img = styled.Image`
  display: flex;
  height: 140px;
  width: 140px;
  margin: 10px auto;
`

const StyledLabel = styled.Text`
color: #818181;
text-align: center;
margin: 10px auto 0 auto;
font-size: 13px;
display: flex;
max-width: 140px;
`

const StyledLabelWide = styled(StyledLabel)`
max-width: 100%;
`

const StyledSuperLabel = styled(StyledLabel)`
font-size: 18px;
font-weight: bold;
color: #333333;
`

class PrimaryChoiceScreen extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <Main>
        <Flex>
          <ButtonsGroup>
            <Touch onPress={() => {
                const pushAction = StackActions.push({
                  routeName: 'RegularRegister'
                })
                navigation.dispatch(pushAction)
              }}>
              <Img source={DescribeRegular} />
              <StyledSuperLabel>
                Follower
              </StyledSuperLabel>
              <StyledLabel>
                Stay updated about creators activity.
                {'\n'}
                No matter where.
              </StyledLabel>
            </Touch>
            <Touch onPress={() => {
                const pushAction = StackActions.push({
                  routeName: 'CreatorRegister'
                })
                navigation.dispatch(pushAction)
              }}>
              <Img source={DescribeCreator} />
              <StyledSuperLabel>
                Creator
              </StyledSuperLabel>
              <StyledLabel>
                Merge communities
                {'\n'}
                as never before.
              </StyledLabel>
            </Touch>
          </ButtonsGroup>
          <TouchEmpty onPress={() => {
              const pushAction = StackActions.push({
                routeName: 'SignIn'
              })
              navigation.dispatch(pushAction)
            }}>
            <StyledLabelWide>
              Already have an account?
            </StyledLabelWide>
            <StyledSuperLabel>
              Sign in
            </StyledSuperLabel>
          </TouchEmpty>
        </Flex>
      </Main>
    )
  }
}

export default withNavigation(PrimaryChoiceScreen)
