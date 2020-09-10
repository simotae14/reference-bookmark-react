import React, { useState } from 'react';
import ResourceForm from './ResourceForm';

import { updateResourceApi } from '../actions/index';

const initialAlert = () => ({ success: null, error: null });

const ResourceUpdate = ({ resource, onResourceUpdate }) => {
  const [alert, setAlert] = useState(initialAlert());
  
  const displayAlert = (type, message) => {
    setAlert({
      ...alert,
      [type]: message
    });
  }
  
  const updateResource = async (resourceData) => {
    try {
      const updateResource = await updateResourceApi(resourceData._id, resourceData);
      onResourceUpdate(updateResource);
      // set success Alert when updating
      displayAlert('success', 'Resource was updated!');
    } catch (error) {
      // set error Alert when we have an error
      displayAlert('error', error);
    }
  };
  return (
    <ResourceForm 
      alert={alert}
      onSubmit={updateResource}
      resource={resource} 
    />
  );
};

export default ResourceUpdate;
