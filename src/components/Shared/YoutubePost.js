import React, { PureComponent } from 'react'
import { View, WebView } from 'react-native'
import styled from 'styled-components'
import { Video } from 'expo-av'
import Youtube from 'react-native-youtube'

const StyledVideo = styled(WebView)`
  width: 100%;
  height: 300px;
  display: flex;
  border-radius: 10px;
`

class YoutubePost extends PureComponent {
  renderVideo = () => {
    const { videoId } = this.props.data.contentDetails
    const { url } = this.props.data

    return (
        <StyledVideo
          source={{uri: `https://www.youtube.com/embed/${videoId}?rel=1&autoplay=0&showinfo=1&controls=1`}}
          javaScriptEnabled={true} />
    )

  }

  render() {
    return (
      <View>
        { this.renderVideo() }
      </View>
    )
  }
}

export default YoutubePost
