import {
  LOAD_CATEGORIAS_REQUEST,
  LOAD_CATEGORIAS_ERROR,
  LOAD_CATEGORIAS_SUCCESS,
} from '../types';

export const categoriasRequest = () => ({ type: LOAD_CATEGORIAS_REQUEST });

export const loadcategoriasError = () => ({ type: LOAD_CATEGORIAS_ERROR });

export const loadcategoriasSuccess = Categorias => ({ type: LOAD_CATEGORIAS_SUCCESS, Categorias });

