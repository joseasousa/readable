import {
  CATEGORIES_GET,
} from '../types';

const Categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_GET:
      return action.payload;
    default:
      return state;
  }
};

export default Categories;
