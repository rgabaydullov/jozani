import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const EyeClose: React.FC<IIconProps> = ({
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
      d="M20 10C20 12.5714 16.4183 16 12 16C7.58172 16 4 12.5714 4 10"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="11" y="15" width="2" height="5" rx="1" fill={fill} />
    <rect
      x="6.38403"
      y="13.835"
      width="2"
      height="4.49902"
      rx="1"
      transform="rotate(30 6.38403 13.835)"
      fill={fill}
    />
    <rect
      x="15.884"
      y="14.835"
      width="2"
      height="4.5"
      rx="1"
      transform="rotate(-30 15.884 14.835)"
      fill={fill}
    />
  </svg>
);

export default React.memo(EyeClose);
