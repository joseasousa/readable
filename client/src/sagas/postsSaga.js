import { put } from 'redux-saga/effects';
import { getAllPostsAPI } from '../api';
import { loadPotsSuccess } from '../actions';

function* getAllPosts() {
  const data = yield getAllPostsAPI();
  yield put(loadPotsSuccess(data.data));
}

export default getAllPosts;
