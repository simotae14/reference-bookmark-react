import React from 'react';

const ResourceList = ({ resourceList, onItemClick }) => {
  return (
    <ul className="list-group mb-3 resource-list">
      {
        resourceList.map(resource => (
          <li onClick={() => onItemClick(resource)} key={resource._id} className="resource-list-item list-group-item d-flex justify-content-between lh-condensed">
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
