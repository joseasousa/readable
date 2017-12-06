import React from 'react';
import { Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddeware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from './sagas';
import reducers from './reducers';
import AppBar from './components/AppBar';
import Posts from './components/Posts';
import AddPost from './components/AddPost';

import './App.css';

const sagamiddleware = createSagaMiddeware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagamiddleware)));

sagamiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <div>
      <AppBar />
      <div className="container">
        <Route exact path="/" render={() => (<Posts />)} />
        <Route exact path="/add" render={() => (<AddPost />)} />
      </div>
      <div className="fixed-action-btn horizontal">
        <a href="/add" className="btn-floating btn-large">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  </Provider>
);

export default App;
