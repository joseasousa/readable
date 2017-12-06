import React, { Component } from 'react';
import Select from './Select';

const categories = [
  {
    name: 'react',
    path: 'react',
  }, {
    name: 'redux',
    path: 'redux',
  }, {
    name: 'udacity',
    path: 'udacity',
  },
];

class AddPost extends Component {
  constructor(props) {
    super(props);
      this._handleChange = e =>
      this.handleChange(e.target.value);
  }

  handleChange(event) {
    const bookState = event;
    console.log(bookState);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field">
              <input
                placeholder="digite seu nome"
                name="nome"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field">
              <textarea className="materialize-textarea" placeholder="Digite seu comentario" />
            </div>

            <div className="input-field">
              <Select
                defaultValue="react"
                values={categories}
                onChange={this._handleChange}
              />
            </div>

            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default AddPost;
