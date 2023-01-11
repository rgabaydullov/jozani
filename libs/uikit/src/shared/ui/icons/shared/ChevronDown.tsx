import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const ChevronDown: React.FC<IIconProps> = ({
  width = 11,
  height = 7,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 11 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5.17369 5.09786L1.11937 1.04354C0.936311 0.860485 0.639515 0.860485 0.456456 1.04354C0.273398 1.2266 0.273398 1.5234 0.456456 1.70646L4.67871 5.92872C4.95208 6.20208 5.3953 6.20208 5.66866 5.92871L9.89092 1.70646C10.074 1.5234 10.074 1.2266 9.89092 1.04354C9.70786 0.860486 9.41107 0.860485 9.22801 1.04354L5.17369 5.09786Z" fill={fill} />
  </svg>
);

export default React.memo(ChevronDown);
