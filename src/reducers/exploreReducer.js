import {
  LOAD_CREATORS_CHUNK,
  TRIGGER_USER_FOLLOW,
  TRIGGER_REFRESH_EXPLORE
} from '../actions/types'

const initialState = {
  results: [],
  exploreQuery: '',
  tags: ['Music', 'Sport', 'Technology', 'Food', 'Nature', 'Television', 'Lifestyle', 'Vlogs', 'Fashion', 'Travel', 'AI', 'Games'],
  refreshing: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CREATORS_CHUNK:
      return {
        ...state,
        results: action.payload
      }
    case TRIGGER_USER_FOLLOW:
      return state
    case TRIGGER_REFRESH_EXPLORE:
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
