import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const enhancer = compose(
    applyMiddleware(thunk),
)

export default function configureStore(initialstate) {
    return createStore(rootReducer, initialstate, enhancer)
}
