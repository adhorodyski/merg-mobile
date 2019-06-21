import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RefreshControl, FlatList, View } from 'react-native'
import { loadOceanChunk } from '../../actions/userOceanActions'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { EmptyFlatlistTemplate, ResultsFlatlist } from '../Shared/UI'
import TileHeader, { ResultTile } from '../Shared/PostContainer'
import TwitterPost from '../Shared/TwitterPost'
import TumblrPost from '../Shared/TumblrPost'
import InstagramPost from '../Shared/InstagramPost'
import YoutubePost from '../Shared/YoutubePost'

class Ocean extends PureComponent {
  renderOcean = res => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')

    if(res.provider === 'Twitter') {
      return (
        <View>
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
        <View>
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
        <View>
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
        <View>
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
  }

  loadChunk = async () => {
    await this.props.loadOceanChunk()
  }

  render() {
    const { ocean, refreshView, refreshing } = this.props
    return (
      <ResultsFlatlist
        data={ocean}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item, idx }) => this.renderOcean(item, idx)}
        ListEmptyComponent={EmptyFlatlistTemplate}
        onEndReachedThreshold={0.8}
        onEndReached={this.loadChunk}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshView}
          />
        }/>
    )
  }
}

const mapStateToProps = state => ({
  ocean: state.userOcean.ocean
})

export default connect(
  mapStateToProps,
  {
    loadOceanChunk
  }
)(Ocean)
