import { FETCH_AUTH, LOGOUT_USER } from '../actions/types'

const initialState = {
  isAuth: false,
  isCreator: false,
  username: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        isCreator: action.payload.isCreator,
        username: action.payload.username
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        isCreator: false,
        username: ''
      }
    default: {
      return state
    }
  }
}

export default reducer
