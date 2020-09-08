import React, { useState } from 'react';

const ResourceUpdate = ({ resource }) => {
  const [updatedResource, setUpdatedResource] = useState(resource);
  const handleChange = (event) => {
    setUpdatedResource({
      ...updatedResource,
      [event.target.name]: event.target.value
    })
  };
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
      {/*<div className="mb-3">
        <label htmlFor="type">Type</label>
        <input 
          type="text" 
          className="form-control" 
          id="type" 
          placeholder="Very interesting book" 
        />
      </div>*/}
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
    </form>
  );
};

export default ResourceUpdate;
