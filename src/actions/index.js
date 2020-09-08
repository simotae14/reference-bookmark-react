import axios from 'axios';

export const getResources = () => axios.get('http://localhost:3001/api/resources');
