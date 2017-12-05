import React from 'react';
import { Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AppBar from './components/AppBar';
import Posts from './components/Posts';
import AddPost from './components/AddPost';

import './App.css';


const store = () =>
  createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
  );


const App = () => (
  <Provider store={store}>
    <div>
      <AppBar />
      <div className="container">
        <Route exact path="/" render={() => (<Posts />)} />
        <Route exact path="/add" render={() => (<AddPost />)} />
      </div>
    </div>
  </Provider>
);

export default App;
