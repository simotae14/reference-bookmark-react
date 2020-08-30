import React from 'react';

const AppView = ({ title, magicNum, counter, testFunction }) => {
  return (
    <div>
      <h1>{title}: {counter}</h1>
      <p>{magicNum}</p>
      <button onClick={testFunction}>Test</button>
    </div>
  );
};

export default AppView;
