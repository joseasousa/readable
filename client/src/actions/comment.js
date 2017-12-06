import cuid from 'cuid';
import * as API from '../api';

import {
  COMMENTS_GET,
  COMMENTS_POST,
  COMMENTS_DEL,
  COMMENTS_ADD,
  COMMENTS_EDIT,
} from '../types';


export function getComments(postId) {
  const request = API.fetchComments(postId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_GET, payload: data, meta: postId });
    });
  };
}

export function pushVoteComment(option, postId) {
  const request = API.commentPostVote(option, postId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_POST, payload: data, meta: postId });
    });
  };
}

export function delComment(commentId) {
  const request = API.commentDelComment(commentId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_DEL, payload: data });
    });
  };
}


export function addComment(option, parentId) {
  const commentId = cuid();
  option.id = commentId;
  option.parentId = parentId;
  option.timestamp = Date.now();

  const request = API.pushComment(option);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_ADD, payload: data });
    });
  };
}

export function editComment(option, commentId) {
  option.timestamp = Date.now();

  const request = API.putComment(option, commentId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENTS_EDIT, payload: data });
    });
  };
}
