export const actionTypesCategories = {
  LOAD_CATEGORIES: 'LOAD_CATEGORIES'
}

export const loadCategories = categoria => ({
  type: actionTypesCategories.LOAD_CATEGORIES,
  categoria
})
