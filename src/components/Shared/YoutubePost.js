import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Youtube from 'react-native-youtube'

const StyledVideo = styled(Youtube)`
  width: 100%;
  height: 300px;
  display: flex;
  border-radius: 10px;
`

class YoutubePost extends PureComponent {
  renderVideo = () => {
    const { url } = this.props.data
    console.log(this.props.data)
    return <StyledVideo videoId={''} />
  }

  render() {
    const { type } = this.props.data
    return (
      <View>
        { this.renderVideo() }
      </View>
    )
  }
}

export default YoutubePost
