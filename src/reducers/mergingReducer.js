import { FETCH_MERGING, UPDATE_TAG } from '../actions/types'

const initialState = {
  letContinue: false,
  profilePic: '',
  facebook: false,
  twitter: false,
  instagram: false,
  spotify: false,
  tumblr: false,
  youtube: false,
  creatorsTags: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MERGING:
      return {
        ...state,
        letContinue: action.payload.letContinue,
        profilePic: action.payload.profilePic,
        facebook: action.payload.facebook,
        twitter: action.payload.twitter,
        instagram: action.payload.instagram,
        spotify: action.payload.spotify,
        tumblr: action.payload.tumblr,
        youtube: action.payload.youtube,
        creatorsTags: action.payload.creatorsTags
      }
    case UPDATE_TAG:
      return {
        ...state,
        creatorsTags: action.payload
      }
    default: {
      return state
    }
  }
}

export default reducer
