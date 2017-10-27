import { graphql } from 'react-apollo'
import categories from './categories'
import { getAllCategoriesQuery } from '../../actions/graphql'

export default graphql(getAllCategoriesQuery, {
})(categories)
