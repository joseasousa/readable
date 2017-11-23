import { takeEvery } from 'redux-saga/effects';
import categories from './categoriasSaga';
import posts from './postsSaga';
import { LOAD_CATEGORIAS_REQUEST, LOAD_POSTS_REQUEST } from '../types';

function* index() {
  yield [
    takeEvery(LOAD_CATEGORIAS_REQUEST, categories),
    takeEvery(LOAD_POSTS_REQUEST, posts),
  ];
}

export default index;
