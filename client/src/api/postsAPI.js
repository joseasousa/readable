import axios from 'axios';

const URL = 'http://localhost:3001/posts';
const HEADER = { headers: { Authorization: 'Bads==dsa' } };

export const getAllPostsAPI = () => axios.get(URL, HEADER);
