import React, { Component } from 'react'
import { getCategories } from '../api'

class Main extends Component {
  constructor (state) {
    super(state)
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    getCategories()
      .then(categories => this.setState({categories: categories.data}))
      .catch(error => console.log(error))
  }
  render () {
    return (
      <div>
                Oi
            </div>
    )
  }
}

export default Main
