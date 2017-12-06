import axios from 'axios';

const API_URL = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'DSADAREcsacasraffas`2231',
};

export const pushPost = (option) => {
  option = JSON.stringify(option);

  return axios({
    method: 'post',
    url: `${API_URL}/posts`,
    data: option,
    headers,
  });
};

export const putPost = (option, postId) => {
  option = JSON.stringify(option);

  return axios({
    method: 'put',
    url: `${API_URL}/posts/${postId}`,
    data: option,
    headers,
  });
};

export const fetchPosts = () => axios.get(`${API_URL}/posts`, { headers });

export const fetchPost = postId => axios.get(`${API_URL}/posts/${postId}`, { headers });

export const postVotePost = (option, postId) => axios.post(`${API_URL}/posts/${postId}`, { option }, { headers });

export const postDelPost = postId => axios.delete(`${API_URL}/posts/${postId}`, { headers });

export const commentPostVote = (option, postId) => axios.post(`${API_URL}/comments/${postId}`, { option }, { headers });

