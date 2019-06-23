import { GET_STORIES } from '../actions/types'

const initialState = {
  stories: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
