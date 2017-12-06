import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import categories from './category';
import posts from './posts';
import comments from './comments';

export default combineReducers({
  categories,
  posts,
  comments,
  routing: routerReducer,
  form: formReducer,
});
