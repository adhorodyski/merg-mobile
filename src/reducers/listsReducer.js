import { FETCH_CREATORS } from '../actions/types'

const initialState = {
  creators: [],
  allCreators: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CREATORS:
      return {
        ...state,
        creators: action.payload,
        allCreators: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
