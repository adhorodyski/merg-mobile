import {
  LOAD_CREATORS_CHUNK,
  TRIGGER_USER_FOLLOW,
  TRIGGER_REFRESH_EXPLORE
} from './types'
import * as base from '../variables'

export const loadCreatorsChunk = () => (dispatch, getState) => {
  const { allCreators } = getState().lists
  dispatch({ type: LOAD_CREATORS_CHUNK, payload: allCreators })
}

export const triggerFollow = followInformations => async dispatch => {
  const dataWrapper = { followInformations }

  await fetch(`${base.API_URL}/api/follow`,
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dataWrapper)
    }
  )
  .catch(err => console.log(err))
  dispatch({ type: TRIGGER_USER_FOLLOW })
}

export const refreshExplore = () => dispatch => {
  dispatch({ type: TRIGGER_REFRESH_EXPLORE })
}
