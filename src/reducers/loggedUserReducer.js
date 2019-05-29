import { FETCH_LOGGED_USER } from '../actions/types'

const initialState = {
  firstName: '',
  username: '',
  email: '',
  creator: false,
  profilePic: '',
  about: '',
  followers: [],
  follows: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGGED_USER:
      return {
        ...state,
        firstName: action.payload.firstName,
        username: action.payload.username,
        email: action.payload.email,
        creator: action.payload.creator,
        profilePic: action.payload.profilePic,
        about: action.payload.about,
        followers: action.payload.followers,
        follows: action.payload.follows
      }
    default: {
      return state
    }
  }
}

export default reducer
