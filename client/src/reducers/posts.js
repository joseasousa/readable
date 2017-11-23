import {
  LOAD_POSTS_ERROR,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
} from '../types';

const InitialState = {
  posts: [],
  isFetching: false,
  error: false,
};


const Posts = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      return { isFetching: true, posts: action.Posts, error: false };

    case LOAD_POSTS_SUCCESS:
      return { isFetching: false, posts: action.Posts, error: false };

    case LOAD_POSTS_ERROR:
      return { isFetching: false, posts: action.Posts, error: true };

    default:
      return state;
  }
};

export default Posts;

