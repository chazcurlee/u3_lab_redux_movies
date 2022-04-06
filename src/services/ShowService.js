import Client from '.'


const API_KEY = process.env.REACT_APP_API_KEY

export const GetShows = async () => {
  try {
    const res = await Client.get(`tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetShowDetails = async (id) => {
  try {
    const res = await Client.get(`tv/${id}?api_key=${API_KEY}&language=en-US`)
    return res.data
  } catch (error) {
    throw error
  }
}