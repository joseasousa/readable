import React from 'react';
import { Chip } from 'react-materialize';

const Post = ({ post }) => (
  <div>
    <h3>{post.title}</h3>

    <Chip>{post.voteScore}</Chip>
    <p>{post.body}</p>
  </div>
);

export default Post;
