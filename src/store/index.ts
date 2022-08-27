import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from '@redux-devtools/extension'
import calendar from './reducers/calendar'
import data from './reducers/data'
import weather from './reducers/weather'
import rootSaga from './sagas'

const persistCongif = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  calendar,
  data,
  weather,
})

const persistedReducer = persistReducer(persistCongif, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export default store
