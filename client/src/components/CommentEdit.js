import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editComment } from '../actions';
import FormEditComment from './FormEditComment';
import NotFound from './NotFound';

class CommentEdit extends Component {
  render() {
    const { location } = this.props;
    const searchString = queryString.parse(location.search);
    const searchValue = searchString.body;

    if (searchValue) {
      const initialValues = {
        body: searchValue,
      };

      return (
        <div className="container-wrapper">
          <div className="container">
            <h1>Edit Comment</h1>
            <FormEditComment initialValues={initialValues} />
          </div>
        </div>
      );
    }
    return <NotFound />;
  }
}

CommentEdit.propTypes = {
  location: PropTypes.object,
};

export default withRouter(connect(null, { editComment })(CommentEdit));
