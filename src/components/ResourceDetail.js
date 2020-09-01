import React from 'react';

const ResourceDetail = ({selectedResource}) => {
  return (
    <div className="card">
      <div className="card-header">
        {selectedResource.title}
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{selectedResource.description}</p>
          <footer className="text-muted mb-2">{selectedResource.type}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default ResourceDetail;
