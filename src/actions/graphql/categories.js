import { gql } from 'react-apollo'

export const getAllCategoriesQuery = gql`
query Categories{
  allCategorieses{
    id,
    name,
    path
  }
}`
