import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryView from './components/CategoryView';
import PostDetails from './components/PostDetails';
import Header from './components/Header';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import PostEdit from './components/PostEdit';
import AddComment from './components/AddComment';
import CommentEdit from './components/CommentEdit';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <div>
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/addPost" component={AddPost} />
          <Route
            path="/editcomment/:postId/:commentId"
            component={CommentEdit}
          />
          <Route
            exact
            path="/addComment/:category/:postId"
            component={AddComment}
          />
          <Route exact path="/:category/:postId/edit" component={PostEdit} />
          <Route exact path="/:category/:postId" component={PostDetails} />
          <Route exact path="/:category" component={CategoryView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
