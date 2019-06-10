import {
  FETCH_FULL_OCEAN,
  LOAD_OCEAN_CHUNK,
  CLEAR_OCEAN,
  TRIGGER_REFRESH_HOME
} from '../actions/types'

const initialState = {
  fullOcean: [],
  ocean: [],
  refreshing: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_OCEAN:
      return {
        ...state,
        fullOcean: [],
        ocean: []
      }
    case FETCH_FULL_OCEAN:
      return {
        ...state,
        fullOcean: action.payload
      }
    case LOAD_OCEAN_CHUNK:
     return {
       ...state,
       ocean: action.payload
     }
    case TRIGGER_REFRESH_HOME:
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
