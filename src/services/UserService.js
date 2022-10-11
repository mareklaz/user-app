import http from './BaseService';

export const getUsers = () => {
  http.get('/users')
    .then((res) => res);
}

export const getDetail = (id) => {
  http.get(`/users/${id}`)
    .then((res) => res);
}

