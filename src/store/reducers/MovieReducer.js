const { GET_MOVIES, GET_MOVIES_DETAILS } = require('../types')

const iState = {
    movies: [],
    
}

const MovieReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case GET_MOVIES_DETAILS:
        return {...state, movies: action.payload}
    default:
      return { ...state }
  }
}

export default MovieReducer