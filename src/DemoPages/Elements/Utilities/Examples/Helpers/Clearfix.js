import React from 'react';

const ClearfixExample = () => {
  return (
    <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
      <button className="btn btn-secondary float-start">Example Button floated left</button>
      <button className="btn btn-danger float-end">Example Button floated right</button>
    </div>
  );
};

export default ClearfixExample;
