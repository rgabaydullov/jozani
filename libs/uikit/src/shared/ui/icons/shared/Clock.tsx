import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Clock: React.FC<IIconProps> = ({
  width = 18,
  height = 18,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM9 4.50342C9.35898 4.50342 9.65 4.79443 9.65 5.15342V9.00342H13C13.359 9.00342 13.65 9.29443 13.65 9.65342C13.65 10.0124 13.359 10.3034 13 10.3034H9C8.64101 10.3034 8.35 10.0124 8.35 9.65342V5.15342C8.35 4.79443 8.64101 4.50342 9 4.50342Z" fill={fill} />
  </svg>
);

export default React.memo(Clock);
