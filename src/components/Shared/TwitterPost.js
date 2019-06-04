import React from 'react'
import { View, Image, Text, WebView } from 'react-native'
import styled from 'styled-components'

const TwitterLogoBlue = require('../../../assets/social-media/twitter_logo_blue.png')

const AuthorInfo = styled.View`
  height: 60px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TweetText = styled.View`
  display: flex;
  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
`

const Actions = styled.View`
  height: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const NamesContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
`

const Name = styled.Text`
  font-size: 14px;
  font-weight: normal;
`

const Username = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #808080;
`

const Linked = styled.View`
  display: flex;
  flex-direction: row;
`

const Permalink = styled.Text`
  font-size: 13px;
  margin-right: 20px;
`

const Time = styled.Text`
  font-size: 13px;
  color: #808080;
`

const External = styled.Text`
  font-size: 16px;
  color: #1B95E0;
`

const Content = styled.Text`
  font-size: 16px;
`

const TweetAvatar = styled.Image`
  height: 36px;
  width: 36px;
  background: #FFFFFF;
  margin: auto 10px auto 0;
  border-radius: 18px;
`

const TwitterLogo = styled.Image`
  height: 36px;
  width: 36px;
  margin: auto 0 auto auto;
`

const Photo = styled.Image`
  width: 100%;
  min-height: 200px;
  margin: 0 auto 20px auto;
  border-radius: 10px;
`

const TwitterPost = props => {
  const {
    data: {
      text,
      created_at,
      id_str,
      entities: {
        hashtags,
        user_mentions,
        media
      },
      user: {
        name,
        screen_name,
        profile_image_url_https
      }
    }
  } = props

  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  const newDate = new Date(created_at)
  const formattedDate = newDate.toLocaleDateString("en-US", dateOptions)

  const transform = (hashtags, mentions, media) => {
    hashtags.sort((a, b) => a.indices[0] - b.indices[0])
    mentions.sort((a, b) => a.indices[0] - b.indices[0])
    media && media.sort((a, b) => a.indices[0] - b.indices[0])
    let last = 0
    let result = []
    let textHolder = ''

    hashtags.forEach((tag, key) => {
      const start = tag.indices[0]
      const end = tag.indices[1]
      textHolder = text.substring(last, start)

      if (textHolder) {
        result.push(textHolder)
      }
      result.push(convertHashtag(tag.text, key))
      last = end
    })

    mentions.forEach((mention, key) => {
      const start = mention.indices[0]
      const end = mention.indices[1]
      textHolder = text.substring(last, start)

      if (textHolder) {
        result.push(textHolder)
      }
      result.push(convertMention(mention.name, key))
      last = end
    })

    media && media.forEach((pic, key) => {
      const start = pic.indices[0]
      const end = pic.indices[1]
      textHolder = text.substring(last, start)

      if (textHolder) {
        result.push(textHolder)
      }
      result.push('')
      last = end
    })

    textHolder = text.substring(last, text.length)
    if (textHolder) {
      result.push(textHolder)
    }

    return result
  }

  const convertHashtag = (tag, i) => {
    if(tag !== '') {
      return (
        <External
          source={{uri: `https://twitter.com/hashtag/${tag}`}}
          key={i}>
          #{tag}
        </External>
      )
    }
  }

  const convertMention = (mention, i) => {
    if(mention !== '') {
      return (
        <External
          source={{uri: `https://twitter.com/${mention}`}}
          key={i}>
          @{mention}
        </External>
      )
    }
  }

  return (
    <View>
      <AuthorInfo>
        <Linked>
          <TweetAvatar source={{uri: profile_image_url_https}} />
          <NamesContainer>
            <Name>{name}</Name>
            <Username>@{screen_name}</Username>
          </NamesContainer>
        </Linked>
        <TwitterLogo source={TwitterLogoBlue} />
      </AuthorInfo>
      <TweetText>
        {
          media &&
          <Photo source={{uri: media[0].media_url_https}} />
        }
        <Content>
          {
            hashtags.length > 0
            || user_mentions.length > 0
            || media
            ? transform(hashtags, user_mentions, media)
            : text
          }
        </Content>
      </TweetText>
      <Actions>
        <Permalink>
          View on Twitter
        </Permalink>
        <View>
          <Time>{formattedDate}</Time>
        </View>
      </Actions>
    </View>
  )
}

export default TwitterPost
