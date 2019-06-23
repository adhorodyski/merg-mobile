import { GET_STORIES } from './types'
import _ from 'underscore'

export const getStories = () => (dispatch, getState) => {
  const { fullOcean } = getState().userOcean
  const { stories } = getState().userStories

  const storiesArray = fullOcean.map(e => {
    if (fullOcean !== undefined) {
      return {
        authorName: e.mergeAuthor.firstName,
        authorUsername: e.mergeAuthor.username,
        authorPic: e.mergeAuthor.profilePic,
        provider: e.provider,
        time: e.convertedDate
      }
    }
    return null
  })

  const sortedStories = _.sortBy(storiesArray, 'time').reverse()
  const filteredStories = _.uniq(sortedStories, 'authorName')

  if (filteredStories.length !== stories.length) {
    dispatch({ type: GET_STORIES, payload: filteredStories })
  }
}
