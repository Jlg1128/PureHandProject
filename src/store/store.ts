import { createStore  } from 'redux'
import Reducers from './reducers'

export const store = createStore(Reducers)
// store.subscribe(() =>
// //   console.log(store.getState())
// {}
// );