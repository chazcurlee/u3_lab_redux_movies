import { GetMovies, GetMovieDetails } from '../../services/ShowService'
import { GET_MOVIES, GET_MOVIES_DETAILS } from '../types'
  
export const LoadMovies = () => {
  
    return async (dispatch) => {
      try {
        const movies = await GetMovies()
        
        dispatch({
          type: GET_MOVIES,
          payload: movies
        })
      } catch (error) {
        throw error
      }
    }
}
  
export const LoadMovieDetails = (id) => {
  
    return async (dispatch) => {
      try {
        const movies = await GetMovieDetails(id)
  
        dispatch({
          type: GET_MOVIES_DETAILS,
          payload: movies
        })
      } catch (error) {
        throw error
      }
    }
}