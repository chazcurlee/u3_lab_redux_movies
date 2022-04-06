import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import ShowReducer from './reducers/ShowReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    showState: ShowReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store