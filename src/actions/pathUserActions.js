import {
  FETCH_HOME_PATH_USER,
  FETCH_HOME_FULL_RIVER,
  LOAD_HOME_RIVER_CHUNK,
  FETCH_EXPLORE_PATH_USER,
  FETCH_EXPLORE_FULL_RIVER,
  LOAD_EXPLORE_RIVER_CHUNK,
  FETCH_LOGGED_PATH_USER,
  FETCH_LOGGED_FULL_RIVER,
  LOAD_LOGGED_RIVER_CHUNK,
  TRIGGER_REFRESH_HOME_PROFILE,
  TRIGGER_REFRESH_EXPLORE_PROFILE,
  TRIGGER_REFRESH_LOGGED_PROFILE
} from './types'
import * as base from '../variables'
import _ from 'underscore'

// TWITTER STREAM
export const getTwitterStream = async user => {
  const { twitterID } = user
  const dataWrapper = {
    data: {
      id: twitterID,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamTwitter`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// INSTAGRAM STREAM
export const getInstagramStream = async user => {
  const { instagramToken } = user
  const dataWrapper = {
    data: {
      token: instagramToken,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamInstagram`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// TUMBLR STREAM
export const getTumblrStream = async user => {
  const { tumblrName } = user
  const dataWrapper = {
    data: {
      tumblrName: tumblrName,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamTumblr`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// YOUTUBE STREAM
export const getYoutubeStream = async user => {
  const { youtubeID } = user
  const dataWrapper = {
    data: {
      id: youtubeID,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamYoutube`,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataWrapper)
    }
  )
  .then(res => { return res.json() })
  .then(data => { return data })
  .catch(err => console.log(err))
}

// FETCH PATH USER
export const fetchPathUser = (username, mode) => async dispatch => {
  await fetch(`${base.API_URL}/api/${username}`)
  .then(res => { return res.json() })
  .then(data => {
    if (mode === 'HOME') {
      dispatch({
        type: FETCH_HOME_PATH_USER,
        payload: data.basicInformations
      })
    }
    if (mode === 'EXPLORE') {
      dispatch({
        type: FETCH_EXPLORE_PATH_USER,
        payload: data.basicInformations
      })
    }
    if (mode === 'PROFILE') {
      dispatch({
        type: FETCH_LOGGED_PATH_USER,
        payload: data.basicInformations
      })
    }
  })
  .catch(err => console.log(JSON.stringify(err)))
}

// FETCH FULL RIVER
export const fetchFullRiver = mode => async (dispatch, getState) => {
  const { follows } = getState().loggedUser.user

  // HOME
  if (mode === 'HOME') {
    const { user } = getState().homeUser
    let river = []
    let isFollowing = false

    for await (const match of follows) {
      if (match.creatorUsername === user.username) {
        isFollowing = match.isFollowing
        const promises = [
          match.creatorTwitter && getTwitterStream(user),
          match.creatorInstagram && getInstagramStream(user),
          match.creatorTumblr && getTumblrStream(user),
          match.creatorYoutube && getYoutubeStream(user)
        ]

        await Promise.all(_.compact(promises))
        .then(res => {
          river = river.concat(_.compact(_.union(...res)))
        })
      }
    }

    if (!isFollowing) {
      const promises = [
        user.twitter && getTwitterStream(user),
        user.instagram && getInstagramStream(user),
        user.tumblr && getTumblrStream(user),
        user.youtube && getYoutubeStream(user)
      ]

      await Promise.all(_.compact(promises))
      .then(res => {
        river = river.concat(_.compact(_.union(...res)))
      })
    }

    dispatch({
      type: FETCH_HOME_FULL_RIVER,
      payload: river,
      isFollowing: isFollowing
    })
  }

  // EXPLORE
  if (mode === 'EXPLORE') {
    const { user } = getState().exploreUser
    let river = []
    let isFollowing = false

    for await (const match of follows) {
      if (match.creatorUsername === user.username) {
        isFollowing = match.isFollowing
        const promises = [
          match.creatorTwitter && getTwitterStream(user),
          match.creatorInstagram && getInstagramStream(user),
          match.creatorTumblr && getTumblrStream(user),
          match.creatorYoutube && getYoutubeStream(user)
        ]

        await Promise.all(_.compact(promises))
        .then(res => {
          river = river.concat(_.compact(_.union(...res)))
        })
      }
    }

    if (!isFollowing) {
      const promises = [
        user.twitter && getTwitterStream(user),
        user.instagram && getInstagramStream(user),
        user.tumblr && getTumblrStream(user),
        user.youtube && getYoutubeStream(user)
      ]

      await Promise.all(_.compact(promises))
      .then(res => {
        river = river.concat(_.compact(_.union(...res)))
      })
    }

    dispatch({
      type: FETCH_EXPLORE_FULL_RIVER,
      payload: river,
      isFollowing: isFollowing
    })
  }

  // PROFILE
  if (mode === 'PROFILE') {
    const { user } = getState().loggedUser
    let river = []
    let isFollowing = false

    for await (const match of follows) {
      if (match.creatorUsername === user.username) {
        isFollowing = match.isFollowing
        const promises = [
          match.creatorTwitter && getTwitterStream(user),
          match.creatorInstagram && getInstagramStream(user),
          match.creatorTumblr && getTumblrStream(user),
          match.creatorYoutube && getYoutubeStream(user)
        ]

        await Promise.all(_.compact(promises))
        .then(res => {
          river = river.concat(_.compact(_.union(...res)))
        })
      }
    }

    if (!isFollowing) {
      const promises = [
        user.twitter && getTwitterStream(user),
        user.instagram && getInstagramStream(user),
        user.tumblr && getTumblrStream(user),
        user.youtube && getYoutubeStream(user)
      ]

      await Promise.all(_.compact(promises))
      .then(res => {
        river = river.concat(_.compact(_.union(...res)))
      })
    }

    dispatch({
      type: FETCH_LOGGED_FULL_RIVER,
      payload: river,
      isFollowing: isFollowing
    })
  }
}

// LOAD RIVER CHUNK
export const loadRiverChunk = mode => (dispatch, getState) => {
  const sortByDate = posts => {
    posts.sort((a, b) => {
      return new Date(b.convertedDate) - new Date(a.convertedDate)
    })
  }

  const getItems = (fullPosts, actualPosts) => {
    let newPostsChunk = []
    for (let i = 0; newPostsChunk.length < 7 && i < fullPosts.length; i++) {
      if(!actualPosts.includes(fullPosts[i])) {
        newPostsChunk.push(fullPosts[i])
      }
    }
    return newPostsChunk
  }

  if (mode === 'HOME') {
    const { fullRiver, river } = getState().homeUser
    sortByDate(fullRiver)
    let postsChunk = river.slice()
    postsChunk = postsChunk.concat(getItems(fullRiver, river))

    dispatch({
      type: LOAD_HOME_RIVER_CHUNK,
      payload: postsChunk
    })
  }
  if (mode === 'EXPLORE') {
    const { fullRiver, river } = getState().exploreUser
    sortByDate(fullRiver)
    let postsChunk = river.slice()
    postsChunk = postsChunk.concat(getItems(fullRiver, river))

    dispatch({
      type: LOAD_EXPLORE_RIVER_CHUNK,
      payload: postsChunk
    })
  }
  if (mode === 'PROFILE') {
    const { fullRiver, river } = getState().loggedUser
    sortByDate(fullRiver)
    let postsChunk = river.slice()
    postsChunk = postsChunk.concat(getItems(fullRiver, river))

    dispatch({
      type: LOAD_LOGGED_RIVER_CHUNK,
      payload: postsChunk
    })
  }
}

export const refreshHomeUser = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_HOME_PROFILE })
}

export const refreshExploreUser = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_EXPLORE_PROFILE })
}

export const refreshLoggedUser = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_LOGGED_PROFILE })
}
