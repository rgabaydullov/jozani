import React from 'react';

const ClipPath = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="curve" clipPathUnits="objectBoundingBox">
        <path d="M 0 1 L 0 0 L 1 0 L 1 1 L 1 0.75 C 0.45 0.45 0.45 1 0 0.75 Z" />
      </clipPath>
    </defs>
  </svg>
);

export default ClipPath;
