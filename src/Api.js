/* global process*/
import axios from 'axios';

const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8)

const headers = {
    Authorization: token
}

export const getCategories = () =>
    axios.get(`${api}/categories`, { headers })
        .then(data => data.data && data.data.categories)

export const getPosts = () =>
    axios.get(`${api}/posts`, { headers })
        .then(data => data.data)

export const getSinglePost = id =>
    axios.get(`${api}/posts/${id}`, { headers })
        .then(data => data.data)

export const getCategoryPosts = category =>
    axios.get(`${api}/${category}/posts`, { headers })
        .then(data => data.data)

export const createPost = data =>
    axios.post(`${api}/posts`, data, { headers })
    .then(data => data.data)