import React from 'react';

import { IIconProps } from '../types';

const CheckRound: React.FC<IIconProps> = ({
  width = 18,
  height = 18,
  fill = '#4e5158',
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM14.4714 5.59526C14.7318 5.85561 14.7318 6.27772 14.4714 6.53807L8.47141 12.5381C8.21106 12.7984 7.78895 12.7984 7.5286 12.5381L4.19526 9.20474C3.93491 8.94439 3.93491 8.52228 4.19526 8.26193C4.45561 8.00158 4.87772 8.00158 5.13807 8.26193L8 11.1239L13.5286 5.59526C13.7889 5.33491 14.2111 5.33491 14.4714 5.59526Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(CheckRound);
