import { combineReducers } from 'redux'
import { Counter as counter } from './reducer'

const Reducers= combineReducers({
    counter, 
})
export default Reducers