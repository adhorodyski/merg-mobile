import React, { PureComponent } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import TileHeader, { ResultTile } from '../Shared/PostContainer'
import TwitterPost from '../Shared/TwitterPost'
import TumblrPost from '../Shared/TumblrPost'
import InstagramPost from '../Shared/InstagramPost'
import YoutubePost from '../Shared/YoutubePost'

const Results = styled.View`
  margin-bottom: 50px;
`

class River extends PureComponent {
  renderRiver = () => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    const { river } = this.props

    return river.map((res, key) => {
      if(res.provider === 'Twitter') {
        return (
          <View key={key}>
            <TileHeader
              user={res.mergeAuthor}
              url={`https://twitter.com/${res.user.screen_name}/status/${res.id_str}`}
              provider={res.provider}
              time={timeAgo.format(new Date(res.convertedDate), 'time')} />
            <ResultTile>
              <TwitterPost data={res} />
            </ResultTile>
          </View>
        )
      }

      if(res.provider === 'Instagram') {
        return (
          <View key={key}>
            <TileHeader
              user={res.mergeAuthor}
              url={res.link}
              provider={res.provider}
              time={timeAgo.format(new Date(res.convertedDate), 'time')} />
            <ResultTile>
              <InstagramPost data={res} />
            </ResultTile>
          </View>
        )
      }

      if(res.provider === 'Youtube') {
        return (
          <View key={key}>
            <TileHeader
              user={res.mergeAuthor}
              url={res.post_url}
              provider={res.provider}
              time={timeAgo.format(new Date(res.convertedDate), 'time')} />
            <ResultTile>
              <YoutubePost data={res} />
            </ResultTile>
          </View>
        )
      }

      if(res.provider === 'Tumblr') {
        return (
          <View key={key}>
            <TileHeader
              user={res.mergeAuthor}
              url={res.post_url}
              provider={res.provider}
              time={timeAgo.format(new Date(res.convertedDate), 'time')} />
            <ResultTile>
              <TumblrPost data={res} />
            </ResultTile>
          </View>
        )
      }
      return null
    })
  }

  render() {
    return (
      <Results>
        { this.renderRiver() }
      </Results>
    )
  }
}

export default River
