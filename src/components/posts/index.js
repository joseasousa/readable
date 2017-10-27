import { graphql } from 'react-apollo'
import Posts from './Posts'
import { getAllPostsQuery } from '../../actions/graphql'

export default graphql(getAllPostsQuery, {
})(Posts)
