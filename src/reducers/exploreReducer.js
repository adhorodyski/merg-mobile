import {
  LOAD_CREATORS_CHUNK,
  TRIGGER_USER_FOLLOW,
  TRIGGER_REFRESH_EXPLORE,
  ASK_NEW_EXPLORE_QUERY,
  APPLY_NEW_EXPLORE_TAG,
  UPDATE_EXPLORE_RESULTS
} from '../actions/types'

const initialState = {
  results: [],
  exploreQuery: '',
  tags: ['Music', 'Lifestyle', 'Vlogs', 'Fashion', 'Games', 'Comedy', 'Art', 'Beauty', 'Technology', 'Sport', 'Automotive', 'Finances', 'Science', 'Nature', 'Food'],
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
    case ASK_NEW_EXPLORE_QUERY:
      return {
        ...state,
        exploreQuery: action.payload
      }
    case APPLY_NEW_EXPLORE_TAG:
      return {
        ...state,
        exploreQuery: action.payload
      }
    case UPDATE_EXPLORE_RESULTS:
      return {
        ...state,
        results: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
