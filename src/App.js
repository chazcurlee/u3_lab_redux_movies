import './styles/App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Movies from './pages/Movies'
import Shows from './pages/Shows'
import MoviesDetails from './pages/MoviesDetails'
import ShowsDetails from './pages/ShowsDetails'
import Nav from './components/Nav'

const App = () => {


  
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/movies/:id' element={<MoviesDetails />} />
        <Route path='/shows/:id' element={<ShowsDetails />} />
      </Routes>
    </div>
  )
}

export default App
