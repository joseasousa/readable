import { combineReducers } from 'redux'
import categories from './categories'
import client from '../client'

export default combineReducers({categories, differentKey: client.reducer()})
