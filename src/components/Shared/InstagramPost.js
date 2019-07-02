import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import * as theme from './themes'
import { Video } from 'expo'

const InstagramLogo = require('../../../assets/social-media/instagram.png')

const AuthorInfo = styled.View`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const ProviderLogo = styled.Image`
  height: 29px;
  width: 29px;
  margin: auto 0 auto auto;
`

const Content = styled.View`
  display: flex;
  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
`

const ContentText = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  padding: 10px 0;
  color: ${theme.primaryTextColor};
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 400px;
  display: flex;
  border-radius: 10px;
  margin: 0 auto 10px auto;
`

const StyledVideo = styled(Video)`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin: 0 auto 10px auto;
`

class InstagramPost extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  triggerExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  renderVideo = () => {
    const { url } = this.props.data.videos.standard_resolution
    return (
      <StyledVideo
        source={{uri: url}}
        volume={1}
        resizeMode="cover"
        isMuted={true}
        shouldPlay
        isLooping />
    )
  }

  renderPhoto = () => {
    const { url } = this.props.data.images.standard_resolution
    return <StyledImage source={{uri: url}} />
  }

  render() {
    const { data, data: { type } } = this.props
    const { isExpanded } = this.state

    let numOfLines = isExpanded ? 0 : 2

    return (
      <View>
        <AuthorInfo>
          <ProviderLogo source={InstagramLogo} />
        </AuthorInfo>
        <Content>
          { type === 'photo' && this.renderPhoto() }
          { type === 'video' && this.renderVideo() }
          {
            data.caption &&
            <ContentText
              onPress={this.triggerExpand}
              suppressHighlighting={true}
              numberOfLines={numOfLines}>
              {data.caption.text}
            </ContentText>
          }
        </Content>
      </View>
    )
  }
}

export default InstagramPost
