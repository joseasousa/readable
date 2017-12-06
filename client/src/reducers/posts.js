import {
  POSTS_GET,
  POST_GET,
  POST_VOTE,
  POST_DELETE,
  POST_CREATE,
  POST_EDIT,
} from '../types';

const Posts = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case POST_CREATE:
      return [...state, payload]
    case POST_EDIT:
      const postIndex = state.findIndex(item => item.id === payload.id)
      return [(state[postIndex]: payload)]
    case POST_VOTE:
      const itemIndex = state.findIndex(item => item.id === payload.id)
      const nextState = [
        ...state.slice(0, itemIndex),
        payload,
        ...state.slice(itemIndex + 1),
      ]
      return nextState
    case POSTS_GET:
      return payload
    case POST_GET:
      return payload
    case POST_DELETE:
      const postIdIndex = state.findIndex(item => item.id === payload.id)
      const stateToBeRemoved = [
        ...state.slice(0, postIdIndex),
        state.filter(post => post.id !== payload.id),
        ...state.slice(postIdIndex + 1),
      ]
      return stateToBeRemoved
    default:
      return state
  }
};

export default Posts;
