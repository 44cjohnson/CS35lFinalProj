import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      }
    
      return req; 
});



export const getItems = () => API.get('/items');
export const addItem = (newItem) => API.post('/items', newItem);
export const deleteItem = (id) => API.delete(`/items/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
