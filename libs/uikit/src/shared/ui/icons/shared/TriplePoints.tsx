import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const TriplePoints: React.FC<IIconProps> = ({
  width = 4,
  height = 18,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 4 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M-8.74226e-08 16C-1.35705e-07 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 -3.91404e-08 17.1046 -8.74226e-08 16Z" fill={fill}/>
    <path d="M-6.99381e-07 2C-7.47663e-07 0.895433 0.89543 1.86821e-06 2 1.81993e-06C3.10457 1.77164e-06 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -6.51099e-07 3.10457 -6.99381e-07 2Z" fill={fill}/>
    <path d="M2 7C0.89543 7 -4.41684e-07 7.89543 -3.93402e-07 9C-3.45119e-07 10.1046 0.89543 11 2 11C3.10457 11 4 10.1046 4 9C4 7.89543 3.10457 7 2 7Z" fill={fill} />
  </svg>
);

export default React.memo(TriplePoints);
