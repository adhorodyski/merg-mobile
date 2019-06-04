import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

const StyledWrapper = styled.View`
  width: 100%;
  display: flex;
`

const Picture = styled.Image`
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
`

const TumblrText = styled.View`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`

const Content = styled.Text`
  font-size: 16px;
  margin: 20px auto 0 auto;
`

const TumblrPost = props => {
  const { url } = props.data.photos ? props.data.photos[0].original_size : ''
  const { type, summary } = props.data
  return (
    <StyledWrapper>
      {
        type === 'photo' &&
        <Picture
          source={{uri: url}} />
      }
      {
        type === 'text' &&
        <TumblrText>
          <Content>{summary}</Content>
        </TumblrText>
      }
    </StyledWrapper>
  )
}

export default TumblrPost
