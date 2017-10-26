import { actionTypesCategories } from '../actions'
const InitialState = {
  categories: []
}

const Categories = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypesCategories.LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }

    default:
      return state
  }
}

export default Categories
