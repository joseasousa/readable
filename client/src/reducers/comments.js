import {
  COMMENTS_GET,
  COMMENTS_POST,
  COMMENTS_DEL,
  COMMENTS_ADD,
  COMMENTS_EDIT,
} from '../types';

const comments = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case COMMENTS_GET:
      return {
        ...state,
        [action.meta]: payload,
      };
    case COMMENTS_POST:
      const { parentId } = action.payload;
      const commentList = [...state[parentId]];
      const commentIndex = commentList.findIndex(inList => inList.id === payload.id);
      commentList[commentIndex] = action.payload;
      const updatedPost = { ...state, [parentId]: commentList };
      return updatedPost;
    case COMMENTS_DEL:
      const postId = payload.parentId;
      const comments = [...state[postId]];
      const indexComment = comments.findIndex(inList => inList.id === payload.id);
      comments[indexComment] = payload;
      const updateComment = { ...state, [postId]: comments };
      return updateComment;
    case COMMENTS_EDIT:
      const commenToEdit = [...state[payload.parentId]];
      const commenToEditIndex = commenToEdit.findIndex(inList => inList.id === payload.id);
      return {
        [payload.parentId]: [[commenToEditIndex], payload],
      };
    case COMMENTS_ADD:
      return {
        state,
        [payload.parentId]: [...state[payload.parentId], payload],
      };

    default:
      return state;
  }
};

export default comments;

