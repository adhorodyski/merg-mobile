import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import Video from 'react-native-video'

const StyledImage = styled(Image)`
  width: 100%;
  height: 400px;
  display: flex;
  border-radius: 10px;
`

const StyledVideo = styled(Video)`
  width: 100%;
  height: 400px;
  display: flex;
  border-radius: 10px;
`

class InstagramPost extends PureComponent {
  // renderVideo = () => {
  //   const { url } = this.props.data.videos.standard_resolution
  //   return <StyledVideo source={{uri: url}} />
  // }

  renderPhoto = () => {
    const { url } = this.props.data.images.standard_resolution
    return <StyledImage source={{uri: url}} />
  }

  render() {
    const { type } = this.props.data
    return (
      <View>
        { type === 'photo' && this.renderPhoto() }
      </View>
    )
  }
}

export default InstagramPost
