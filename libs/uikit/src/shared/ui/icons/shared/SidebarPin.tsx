import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const SidebarPin: React.FC<IIconProps> = ({
  width = 32,
  height = 32,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="9" y="7" width="7" height="4" rx="2" fill={fill} />
    <rect x="9" y="14" width="7" height="4" rx="2" fill={fill} />
    <rect x="9" y="21" width="7" height="4" rx="2" fill={fill} />
    <path
      d="M24.4331 15.3453C24.7585 15.7211 24.7585 16.2789 24.4331 16.6547L22.2559 19.1686C21.6498 19.8685 20.5 19.4398 20.5 18.5139L20.5 13.4861C20.5 12.5602 21.6498 12.1315 22.2559 12.8314L24.4331 15.3453Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(SidebarPin);
