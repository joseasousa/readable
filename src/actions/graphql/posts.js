import { gql } from 'react-apollo'

export const getAllPostsQuery = gql`
query Posts{
    allPosts {
      id,
      author,
      body,
      category,
      deleted,
      timestamp,
      title,
      voteScore
    }
  }`
