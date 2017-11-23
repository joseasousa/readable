import axios from 'axios';

const URL = 'http://localhost:3001/categories';
const HEADER = { headers: { Authorization: 'Bads==dsa' } };

export const getCategoriesAPI = () => axios.get(URL, HEADER);
