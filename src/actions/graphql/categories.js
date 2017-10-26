import { gql } from 'react-apollo'

export const getAllCategoriesQuery = gql`
query categories{
  allCategorieses{
    id,
    name,
    path
  }
}`
