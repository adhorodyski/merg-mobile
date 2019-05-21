import { FETCH_LOGGED_USER } from '../actions/types'

const initialState = {
  firstName: '',
  username: '',
  nameDisplayed: '',
  creator: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGGED_USER:
      return {
        ...state,
        firstName: action.payload.firstName,
        username: action.payload.username,
        nameDisplayed: action.payload.nameDisplayed,
        creator: action.payload.creator
      }
    default: {
      return state
    }
  }
}

export default reducer
