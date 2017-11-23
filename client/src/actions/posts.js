import {
  LOAD_POSTS_ERROR,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
} from '../types';

export const potsRequest = () => ({ type: LOAD_POSTS_REQUEST });

export const loadPotsError = () => ({ type: LOAD_POSTS_ERROR });

export const loadPotsSuccess = Posts => ({ type: LOAD_POSTS_SUCCESS, Posts });

