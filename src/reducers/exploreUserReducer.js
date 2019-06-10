import {
  FETCH_EXPLORE_PATH_USER,
  FETCH_EXPLORE_FULL_RIVER,
  LOAD_EXPLORE_RIVER_CHUNK,
  TRIGGER_REFRESH_EXPLORE_PROFILE
} from '../actions/types'

const initialState = {
  user: {},
  fullRiver: [],
  river: [],
  isFollowing: false,
  refreshing: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_EXPLORE_PATH_USER:
      return {
        ...state,
        user: action.payload,
        fullRiver: [],
        river: []
      }
    case FETCH_EXPLORE_FULL_RIVER:
      return {
        ...state,
        fullRiver: action.payload,
        isFollowing: action.isFollowing
      }
    case LOAD_EXPLORE_RIVER_CHUNK:
      return {
        ...state,
        river: action.payload
      }
    case TRIGGER_REFRESH_EXPLORE_PROFILE:
      return {
        ...state,
        refreshing: !state.refreshing
      }
    default: {
      return state
    }
  }
}

export default reducer
