import {
  FETCH_PATH_USER,
  FETCH_FULL_RIVER,
  LOAD_RIVER_CHUNK
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
export const fetchPathUser = username => async dispatch => {
  await fetch(`${base.API_URL}/api/${username}`)
  .then(res => { return res.json() })
  .then(data => {
    dispatch({
      type: FETCH_PATH_USER,
      payload: data.basicInformations
    })
  })
  .catch(err => console.log(JSON.stringify(err)))
}

// FETCH FULL RIVER
export const fetchFullRiver = () => async (dispatch, getState) => {
  const { user } = getState().pathUser
  const { follows } = getState().loggedUser
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
    type: FETCH_FULL_RIVER,
    payload: river,
    isFollowing: isFollowing
  })
}

// LOAD RIVER CHUNK
export const loadRiverChunk = () => (dispatch, getState) => {
  const { fullRiver, river } = getState().pathUser

  const sortByDate = posts => {
    posts.sort((a, b) => {
      return new Date(b.convertedDate) - new Date(a.convertedDate)
    })
  }
  sortByDate(fullRiver)

  const getItems = () => {
    let newPostsChunk = []
    for (let i = 0; newPostsChunk.length < 7 && i < fullRiver.length; i++) {
      if(!river.includes(fullRiver[i])) {
        newPostsChunk.push(fullRiver[i])
      }
    }
    return newPostsChunk
  }

  let postsChunk = river.slice()
  postsChunk = postsChunk.concat(getItems())
  dispatch({ type: LOAD_RIVER_CHUNK, payload: postsChunk })
}
