import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadRiverChunk } from '../../actions/pathUserActions'
import { RefreshControl, FlatList, View } from 'react-native'
import styled from 'styled-components'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import About from './About'
import { EmptyFlatlistTemplate, ResultsFlatlist } from '../Shared/UI'
import TileHeader, { ResultTile } from '../Shared/PostContainer'
import TwitterPost from '../Shared/TwitterPost'
import TumblrPost from '../Shared/TumblrPost'
import InstagramPost from '../Shared/InstagramPost'
import YoutubePost from '../Shared/YoutubePost'

class River extends PureComponent {
  renderRiver = res => {
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
    const { mode } = this.props
    await this.props.loadRiverChunk(mode)
  }

  render() {
    const {
      river,
      refreshing,
      refreshView,
      user,
      isFollowing
    } = this.props

    return (
      <ResultsFlatlist
        data={river}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item, idx }) => this.renderRiver(item, idx)}
        ListEmptyComponent={EmptyFlatlistTemplate}
        ListHeaderComponent={
          <About
            user={user}
            isFollowing={isFollowing} />
        }
        onEndReachedThreshold={0.8}
        onEndReached={this.loadChunk}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshView} />
        } />
    )
  }
}

export default connect(
  null,
  {
    loadRiverChunk
  }
)(River)
