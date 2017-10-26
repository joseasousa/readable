import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import client from './client'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  reducers,
  composeWithDevTools(),
  applyMiddleware(client.middleware())
)

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'))
registerServiceWorker()
