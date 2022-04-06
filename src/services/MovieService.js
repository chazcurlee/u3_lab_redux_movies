import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const GetMovies = async () => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    return res.data
  } catch (error) {
    throw error
  }
}

