import { combineReducers } from 'redux';
import categorias from './categories';
import posts from './posts';

export default combineReducers({ categorias, posts });
