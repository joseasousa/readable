import React from 'react';
import { connect } from 'react-redux';
import { Collection, CollectionItem } from 'react-materialize';
import { getPosts } from '../actions';
import Post from './Post';

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, isFetching } = this.props;
    return (
      <div>
        {
          !isFetching && (
            <Collection>
              {posts.map(post => (
                <CollectionItem key={post.id}>
                  <Post post={post} />
                </CollectionItem>
            ))}
            </Collection>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => {
    dispatch(getPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
