const { GET_SHOWS, GET_SHOWS_DETAILS } = require('../types')

const iState = {
    shows: []
}

const ShowReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return { ...state, shows: action.payload }
    case GET_SHOWS_DETAILS:
        return {shows: action.payload}
    default:
      return { ...state }
  }
}

export default ShowReducer