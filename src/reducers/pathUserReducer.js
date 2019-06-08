import {
  FETCH_PATH_USER,
  FETCH_FULL_RIVER,
  LOAD_RIVER_CHUNK
} from '../actions/types'

const initialState = {
  user: {},
  fullRiver: [],
  river: [],
  isFollowing: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PATH_USER:
      return {
        ...state,
        user: action.payload,
        fullRiver: [],
        river: []
      }
    case FETCH_FULL_RIVER:
      return {
        ...state,
        fullRiver: action.payload,
        isFollowing: action.isFollowing
      }
    case LOAD_RIVER_CHUNK:
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
