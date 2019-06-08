import {
  FETCH_LOGGED_USER,
  FETCH_LOGGED_PATH_USER,
  FETCH_LOGGED_FULL_RIVER,
  LOAD_LOGGED_RIVER_CHUNK
} from '../actions/types'

const initialState = {
  user: {},
  fullRiver: [],
  river: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGGED_USER:
      return {
        ...state,
        user: action.payload
      }
    case FETCH_LOGGED_PATH_USER:
      return {
        ...state,
        user: action.payload,
        fullRiver: [],
        river: []
      }
    case FETCH_LOGGED_FULL_RIVER:
      return {
        ...state,
        fullRiver: action.payload
      }
    case LOAD_LOGGED_RIVER_CHUNK:
      return {
        ...state,
        river: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
