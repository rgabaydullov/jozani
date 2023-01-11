import React from 'react';
import { IIconProps } from '../types';

const Info: React.FC<IIconProps> = ({
  width = 12,
  height = 12,
  fill = '#d9d9d9',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.29674 2.82015C5.29674 2.63837 5.4441 2.491 5.62589 2.491H6.37411C6.5559 2.491 6.70326 2.63837 6.70326 2.82015V3.39319C6.70326 3.57497 6.5559 3.72234 6.37411 3.72234H5.62589C5.4441 3.72234 5.29674 3.57497 5.29674 3.39319V2.82015ZM6.25861 4.69377C6.4404 4.69377 6.58777 4.84114 6.58777 5.02292V9.23779C6.58777 9.41957 6.4404 9.56694 6.25861 9.56694H5.74138C5.55959 9.56694 5.41223 9.41957 5.41223 9.23779V5.02292C5.41223 4.84114 5.55959 4.69377 5.74138 4.69377H6.25861Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(Info);
