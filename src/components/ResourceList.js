import React, { useState, useEffect } from 'react';

const initialResources = [
  {
    _id: '1',
    title: 'Resource 1',
    description: 'Description 1',
    link: 'https://google.com',
    type: 'blog'
  },
  {
    _id: '2',
    title: 'Resource 2',
    description: 'Description 2',
    link: 'https://google.com',
    type: 'video'
  },
  {
    _id: '3',
    title: 'Resource 3',
    description: 'Description 3',
    link: 'https://google.com',
    type: 'book'
  }
];

const ResourceList = () => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    setResourceList(initialResources)
  }, []);
  return (
    <ul className="list-group mb-3 resource-list">
      {
        resourceList.map(resource => (
          <li key={resource._id} className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{resource.title}</h6>
              <small className="text-muted">{resource.description}</small>
            </div>
            <span className="text-muted">{resource.type}</span>
          </li>
        ))
      }
    </ul>
  );
};

export default ResourceList;
