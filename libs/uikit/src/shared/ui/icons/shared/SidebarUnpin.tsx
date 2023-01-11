import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const SidebarUnpin: React.FC<IIconProps> = ({
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
    <rect x="17" y="7" width="7" height="4" rx="2" fill={fill} />
    <rect x="17" y="14" width="7" height="4" rx="2" fill={fill} />
    <rect x="17" y="21" width="7" height="4" rx="2" fill={fill} />
    <path
      d="M8.56695 15.3453C8.24152 15.7211 8.24152 16.2789 8.56695 16.6547L10.7441 19.1686C11.3502 19.8685 12.5 19.4398 12.5 18.5139L12.5 13.4861C12.5 12.5602 11.3502 12.1315 10.7441 12.8314L8.56695 15.3453Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(SidebarUnpin);
