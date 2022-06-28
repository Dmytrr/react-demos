import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => axiosInstance.get('/users').then(value => value.data);
const getPosts = () => axiosInstance.get('/posts').then(value => value.data);

export {getUsers, getPosts};