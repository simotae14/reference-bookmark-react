import React, { useState, useEffect } from 'react';

const RESOURCE_TYPES = ['blog', 'video', 'book'];

const ResourceForm = ({ resource, onSubmit }) => {
  const [updatedResource, setUpdatedResource] = useState(resource);
  const handleChange = (event) => {
    setUpdatedResource({
      ...updatedResource,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = () => {
    onSubmit(updatedResource);
  };

  useEffect(() => {
    setUpdatedResource(resource);
  }, [resource]);
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange} 
          value={updatedResource.title}
          type="text" 
          className="form-control" 
          id="title" 
          name="title" 
          placeholder="How to survive in mountains" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <textarea 
          onChange={handleChange} 
          className="form-control" 
          id="description" 
          name="description" 
          placeholder="Just some description"
          value={updatedResource.description}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="link">Resource Link</label>
        <div className="input-group">
          <input 
            onChange={handleChange} 
            value={updatedResource.link}
            type="text" 
            className="form-control" 
            id="link" 
            name="link" 
            placeholder="Username" 
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="type">Type</label>
        <select
          onChange={handleChange}
          className="form-control"
          name="type"
          value={updatedResource.type}
          id="type"
        >
          {
            RESOURCE_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))
          }
        </select>
      </div>
      <hr className="mb-4" />
      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-lg btn-block" 
        type="button"
      >
        Submit
      </button>
    </form>
  );
};

export default ResourceForm;
