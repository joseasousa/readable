import * as API from '../api';
import {
  CATEGORIES_GET,
  CATEGORIES_GET_POSTS,
} from '../types';

export function getCategories() {
  const request = API.fetchCategories()

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET, payload: data.categories })
    })
  }
}

export function getCategoriesPost(category) {
  const request = API.fetchCategoriesPost(category)

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: CATEGORIES_GET_POSTS, payload: data })
    })
  }
}
