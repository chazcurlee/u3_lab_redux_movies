import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadShows } from '../store/actions/ShowActions'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const mapStateToProps = ({ showState }) => {
  return { showState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShows: () => dispatch(LoadShows())
  }
}



const Shows = (props) => {
  
    const navigate = useNavigate()
    

    const handleClick = (id) => {

        navigate(`/shows/${id}`)
        props.fetchShows()


    }

  useEffect(() => {
        props.fetchShows()
  },[])
  console.log(props.showState.shows)
  return (

    <div>
    <ul>
      {props.showState.shows.results.map((show) => (
          <div onClick={()=> {handleClick(show.id)}}>
              <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
              <li key={show.id}>{show.name}</li>
          </div>
          
        ))}
    </ul>
    </div>
   
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(Shows)