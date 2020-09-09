import React, { useState, useEffect } from 'react';

import ResourceSearch from '../components/ResourceSearch';
import ResourceList from '../components/ResourceList';
import ResourceUpdate from '../components/ResourceUpdate';
import ResourceDetail from '../components/ResourceDetail';
import Header from '../components/Header';

import { getResources } from '../actions/index';

const ResourceHome = () => {
  const [resourceList, setResourceList] = useState([]);
  // state to toggle a component or another
  const [isDetailView, setDetailView] = useState(true);
  // state to define the actual Resource Selected
  const [selectedResource, setSelectedResource] = useState();

  useEffect(() => {
    async function _getResources () {
      const resources = await getResources();
      setResourceList(resources);
    }
    _getResources();
  }, []);

  const addResource = () => {
    const _id = `_${Math.random().toString(36).substr(2, 9)}`;
    const newResource = {
      _id,
      title: `Title ${_id}`,
      description: `Description ${_id}`,
      link: 'https://google.com',
      type: 'video'
    }
    setResourceList([newResource, ...resourceList]);
  };

  const handleResourceUpdate = updatedResource => {
    // Update Resource List
    alert(JSON.stringify(updatedResource));
  }
  
  const hasResources = resourceList && resourceList.length > 0;
  const activeResource = selectedResource || (hasResources && resourceList[0]) || null;
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your Resources</span>
            <span className="badge badge-secondary badge-pill">6</span>
          </h4>
          <ResourceSearch />
          <ResourceList 
            onItemClick={setSelectedResource} 
            resourceList={resourceList}
            activeId={activeResource?._id} 
          />
          <button onClick={addResource} className="btn btn-primary">Add Resource</button>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Resource {activeResource?._id}
            <button 
              onClick={() => setDetailView(!isDetailView)}
              className={`btn btn-sm ml-2 ${isDetailView ? 'btn-warning' : 'btn-primary'}`}
            >
              {
                isDetailView ? 'Edit' : 'Detail'
              }
            </button>
          </h4>
          { isDetailView ? 
            <ResourceDetail resource={activeResource} /> : 
            <ResourceUpdate 
              onResourceUpdate={handleResourceUpdate}
              resource={activeResource} 
            /> }          
        </div>
      </div>
    </div>
  );
};

export default ResourceHome;
