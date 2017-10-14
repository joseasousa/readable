import axios from 'axios'

const URL = 'http://localhost:3001/categories'

export const getCategories = () => axios.get(URL, {headers: {Authorization: 'auth'}})
