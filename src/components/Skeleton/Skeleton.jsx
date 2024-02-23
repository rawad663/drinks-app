import React from 'react';
import './Skeleton.css';

export const Skeleton = ({ width, height, shape, style }) => {
  const defaultStyles = {
    width: width || 50,
    height: height || 50,
    borderRadius: shape === 'circle' ? '50%' : '4px',
  };

  return <div className="skeleton" style={{...defaultStyles, ...style}} />;
};
