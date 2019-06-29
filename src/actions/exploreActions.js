import {
  LOAD_CREATORS_CHUNK,
  TRIGGER_USER_FOLLOW,
  TRIGGER_HOME_USER_FOLLOW,
  TRIGGER_EXPLORE_USER_FOLLOW,
  TRIGGER_REFRESH_EXPLORE,
  ASK_NEW_EXPLORE_QUERY,
  UPDATE_EXPLORE_RESULTS
} from './types'
import * as base from '../variables'
import axios from 'axios'

export const loadCreatorsChunk = () => (dispatch, getState) => {
  const { allCreators } = getState().lists
  dispatch({ type: LOAD_CREATORS_CHUNK, payload: allCreators })
}

export const triggerFollow = (followInformations, mode) => dispatch => {
  if (mode === 'HOME') {
    axios.post(`${base.API_URL}/api/follow`,
      {
        headers: { 'Content-Type': 'application/json' },
        followInformations
      }
    )
    .catch(err => console.log(err))
    // dispatch proper follow action
    dispatch({ type: TRIGGER_HOME_USER_FOLLOW })
  }
  if (mode === 'EXPLORE') {
    axios.post(`${base.API_URL}/api/follow`,
      {
        headers: { 'Content-Type': 'application/json' },
        followInformations
      }
    )
    .catch(err => console.log(err))
    // dispatch proper follow action
    dispatch({ type: TRIGGER_EXPLORE_USER_FOLLOW })
  } else {
    // make a request without dispatching follow action
    axios.post(`${base.API_URL}/api/follow`,
      {
        headers: { 'Content-Type': 'application/json' },
        followInformations
      }
    )
    .catch(err => console.log(err))
    // dispatch basic follow action
    dispatch({ type: TRIGGER_USER_FOLLOW })
  }
}

export const refreshExplore = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_EXPLORE })
}

export const newExploreQuery = newValue => dispatch => {
  dispatch({ type: ASK_NEW_EXPLORE_QUERY, payload: newValue })
}

export const updateExploreResults = () => async (dispatch, getState) => {
  const { allCreators } = getState().lists
  const { exploreQuery } = getState().explore

  const filteredResults = await allCreators.filter(creator => {
    const { nameDisplayed, username } = creator.local
    const creatorData = `${nameDisplayed} ${username}`

    return creatorData.includes(exploreQuery)
  })

  dispatch({ type: UPDATE_EXPLORE_RESULTS, payload: filteredResults })
}
