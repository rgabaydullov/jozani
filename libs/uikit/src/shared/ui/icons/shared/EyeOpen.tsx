import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const EyeOpen: React.FC<IIconProps> = ({
  width = 24,
  height = 24,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12C20 13.0928 19.2258 14.5887 17.7189 15.8609C16.2451 17.1051 14.2177 18 12 18C9.78228 18 7.75494 17.1051 6.28113 15.8609C4.77423 14.5887 4 13.0928 4 12C4 10.9072 4.77423 9.4113 6.28113 8.13911C7.75494 6.89486 9.78228 6 12 6C14.2177 6 16.2451 6.89486 17.7189 8.13911C19.2258 9.4113 20 10.9072 20 12Z"
      stroke={fill}
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="2" fill={fill} />
  </svg>
);
export default React.memo(EyeOpen);
