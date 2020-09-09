import React from 'react';
import ResourceForm from './ResourceForm';

import { updateResourceApi } from '../actions/index';

const ResourceUpdate = ({ resource, onResourceUpdate }) => {
  const updateResource = async (resourceData) => {
    const updateResource = await updateResourceApi(resourceData._id, resourceData);
    onResourceUpdate(updateResource);
  };
  return (
    <ResourceForm 
      onSubmit={updateResource}
      resource={resource} 
    />
  );
};

export default ResourceUpdate;
