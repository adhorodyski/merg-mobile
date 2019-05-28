import {
  LOGIN_USER,
  GET_LOGIN_EMAIL,
  GET_LOGIN_PASSWORD
} from '../actions/types'

const initialState = {
  email: '',
  password: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state
      }
    case GET_LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case GET_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    default: {
      return state
    }
  }
}

export default reducer
