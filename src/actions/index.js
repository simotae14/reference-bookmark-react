import axios from 'axios';

export const getResources = () => axios.get('http://localhost:3000/api/resources')
  .then(res => res.data);


export const updateResourceApi = (resourceId, resourceData) => {
  return axios.patch(`http://localhost:3000/api/resources/${resourceId}`, resourceData)
    .then(res => res.data);
} 
