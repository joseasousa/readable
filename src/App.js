import React from 'react'
import { Route } from 'react-router-dom'
import {Navbar, NavItem, Icon} from 'react-materialize'
import Main from './components/main'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='Reading' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
        <div className='container'>
          <Route exact path='/' render={() => (<Main />)} />
        </div>
      </div>
    )
  }
}

export default App
