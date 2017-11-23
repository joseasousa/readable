import { combineReducers } from 'redux';
import categorias from './categorias';
import posts from './posts';

export default combineReducers({ categorias, posts });
