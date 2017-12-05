import {
  CATEGORIES_GET_CATEGORIES,
} from '../types';

const Categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default Categories;
