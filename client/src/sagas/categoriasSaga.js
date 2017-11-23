import { put } from 'redux-saga/effects';
import { getCategoriesAPI } from '../api';
import { loadcategoriasSuccess } from '../actions';

function* getCategories() {
  const categorias = yield getCategoriesAPI();
  yield put(loadcategoriasSuccess(categorias.data.categories));
}

export default getCategories;
