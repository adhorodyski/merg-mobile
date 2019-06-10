import {
  FETCH_FULL_OCEAN,
  LOAD_OCEAN_CHUNK,
  CLEAR_OCEAN,
  TRIGGER_REFRESH_HOME
} from './types'
import {
  getTwitterStream,
  getInstagramStream,
  getTumblrStream,
  getYoutubeStream
} from './pathUserActions'
import * as base from '../variables'
import _ from 'underscore'

export const fetchFullOcean = () => async (dispatch, getState) => {
  dispatch({ type: CLEAR_OCEAN })
  const { follows } = getState().loggedUser.user
  let ocean = []

  for await (const creator of follows) {
    await fetch(`${base.API_URL}/api/${creator.creatorUsername}`)
    .then(res => {
      return res.json()
    })
    .then(async data => {
      const user = data.basicInformations

      const promises = [
        creator.creatorTwitter && getTwitterStream(user),
        creator.creatorInstagram && getInstagramStream(user),
        creator.creatorTumblr && getTumblrStream(user),
        creator.creatorYoutube && getYoutubeStream(user)
      ]

      await Promise.all(_.compact(promises))
      .then(newRes => {
        ocean = ocean.concat(_.compact(_.union(...newRes)))
      })
    })
    .catch(err => console.log(err))
  }

  dispatch({ type: FETCH_FULL_OCEAN, payload: ocean })
}

export const loadOceanChunk = () => (dispatch, getState) => {
  const { fullOcean, ocean } = getState().userOcean

  const sortByDate = posts => {
    posts.sort((a, b) => {
      return new Date(b.convertedDate) - new Date(a.convertedDate)
    })
  }
  sortByDate(fullOcean)

  const getItems = () => {
    let newPostsChunk = []
    for (let i = 0; newPostsChunk.length < 7 && i < fullOcean.length; i++) {
      if(!ocean.includes(fullOcean[i])) {
        newPostsChunk.push(fullOcean[i])
      }
    }
    return newPostsChunk
  }

  let postsChunk = ocean.slice()
  postsChunk = postsChunk.concat(getItems())
  dispatch({ type: LOAD_OCEAN_CHUNK, payload: postsChunk })
}

export const refreshHome = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_HOME })
}
