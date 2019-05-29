import { LOAD_CREATORS_CHUNK } from '../actions/types'

const initialState = {
  results: [],
  exploreQuery: '',
  tags: ['Music', 'Sport', 'Technology', 'Food', 'Nature', 'Television', 'Lifestyle', 'Vlogs', 'Fashion', 'Travel', 'AI', 'Games']
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CREATORS_CHUNK:
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
