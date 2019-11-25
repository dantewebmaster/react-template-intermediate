import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/api/'
});

export async function getUsers(quantity = 5) {
  return http.get(`?results=${quantity}`);
}
