import { GetShows, GetShowDetails } from '../../services/ShowService'
import { GET_SHOWS, GET_SHOWS_DETAILS } from '../types'
  
export const LoadShows = () => {
  
    return async (dispatch) => {
      try {
        const shows = await GetShows()
        
        dispatch({
          type: GET_SHOWS,
          payload: shows
        })
      } catch (error) {
        throw error
      }
    }
}
  
export const LoadShowDetails = (id) => {
  
    return async (dispatch) => {
      try {
        const shows = await GetShowDetails(id)
  
        dispatch({
          type: GET_SHOWS_DETAILS,
          payload: shows
        })
      } catch (error) {
        throw error
      }
    }
}