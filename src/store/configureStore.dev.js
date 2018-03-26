// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createHashHistory'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
//import DevTools from './devTools'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
// const history = createHistory()
// const middleware = routerMiddleware(history)
let sagaMiddleware = createSagaMiddleware();

const logger = createLogger({collapsed:true})

const enhancer = compose(
    applyMiddleware(logger),
    applyMiddleware(sagaMiddleware)
)

export default function configureStore(initialstate) {
    const store = createStore(rootReducer, initialstate, enhancer)
    sagaMiddleware.run(rootSaga)
    return store
}


