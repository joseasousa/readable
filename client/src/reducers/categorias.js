import {
  LOAD_CATEGORIAS_ERROR,
  LOAD_CATEGORIAS_REQUEST,
  LOAD_CATEGORIAS_SUCCESS,
} from '../types';

const InitialState = {
  categorias: [],
  isFetching: false,
  error: false,
};

const Categories = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIAS_REQUEST:
      return { isFetching: true, categorias: action.Categorias, error: false };

    case LOAD_CATEGORIAS_SUCCESS:
      return { isFetching: false, categorias: action.Categorias, error: false };

    case LOAD_CATEGORIAS_ERROR:
      return { isFetching: false, categorias: action.Categorias, error: true };

    default:
      return state;
  }
};

export default Categories;
