import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/main'
import Posts from './components/posts'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div>

        <div className='container'>
          <Route exact path='/' render={() => (<Main />)} />
          <Route path='/posts' render={() => <Posts />} />
        </div>
      </div>
    )
  }
}

export default App
