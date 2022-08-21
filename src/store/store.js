import authRedeucer from './reducer'
import { createStore } from 'redux'

const store = createStore(authRedeucer)
export default store;