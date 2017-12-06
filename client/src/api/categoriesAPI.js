import axios from 'axios';

const API_URL = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'DSADAREcsacasraffas`2231',
};

export const fetchCategories = () => axios.get(`${API_URL}/categories`, { headers });

export const fetchCategoriesPost = category => axios.get(`${API_URL}/${category}/posts`, { headers });
