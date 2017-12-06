import axios from 'axios';

const API_URL = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'DSADAREcsacasraffas`2231',
};

export const fetchComments = postId => axios.get(`${API_URL}/posts/${postId}/comments`, { headers });

export const commentDelComment = commentId => axios.delete(`${API_URL}/comments/${commentId}`, { headers });

export const pushComment = (option) => {
  option = JSON.stringify(option);

  return axios({
    method: 'post',
    url: `${API_URL}/comments`,
    data: option,
    headers,
  });
};

export const putComment = (option, commentId) => {
  option = JSON.stringify(option);

  return axios({
    method: 'put',
    url: `${API_URL}/comments/${commentId}`,
    data: option,
    headers,
  });
};
