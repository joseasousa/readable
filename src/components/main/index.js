import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import main from './main'
import { loadCategories } from '../../actions'
import { getAllCategoriesQuery } from '../../actions/graphql'

export default graphql(getAllCategoriesQuery, {
})(main)

