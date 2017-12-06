import cuid from 'cuid';
import * as API from '../api';

import {
  POSTS_GET,
  POST_GET,
  POST_VOTE,
  POST_DELETE,
  POST_CREATE,
  POST_EDIT,
} from '../types';


export function getPosts() {
  const request = API.fetchPosts();

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POSTS_GET, payload: data });
    });
  };
}

export function getPost(postId) {
  const request = API.fetchPost(postId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_GET, payload: data });
    });
  };
}

export function pushVotePost(option, postId) {
  const request = API.postVotePost(option, postId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_VOTE, payload: data, meta: postId });
    });
  };
}

export function delPost(postId) {
  const request = API.postDelPost(postId);
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_DELETE, payload: data });
    });
  };
}

export function createPost(option) {
  const postId = cuid();
  option.id = postId;
  option.timestamp = Date.now();
  option.deleted = false;

  const request = API.pushPost(option);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_CREATE, payload: data });
    });
  };
}

export function editPost(option, postId) {
  const request = API.putPost(option, postId);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_EDIT, payload: data });
    });
  };
}
