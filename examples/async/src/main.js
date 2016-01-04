import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import rootSaga from './sagas'
import { runSaga } from '../../../src'

const store = configureStore()
runSaga(rootSaga(store.getState), store)

window.store = store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
