import React from 'react'
import { Route } from 'react-router-dom'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddeware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import Main from './components/main'

import './App.css'

const sagamiddleware = createSagaMiddeware()
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagamiddleware)
  )
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <div className='container'>
          <Route exact path='/' render={() => (<Main />)} />
        </div>
      </Provider>
    )
  }
}

export default App
