import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const ChevronLeft: React.FC<IIconProps> = ({
  width = 8,
  height = 14,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M1.7769 6.9999L7.18266 1.59414C7.42674 1.35006 7.42674 0.95433 7.18266 0.710252C6.93859 0.466175 6.54286 0.466175 6.29878 0.710252L0.504111 6.50492C0.230744 6.77829 0.230744 7.2215 0.504111 7.49487L6.29878 13.2895C6.54286 13.5336 6.93859 13.5336 7.18266 13.2895C7.42674 13.0455 7.42674 12.6497 7.18266 12.4057L1.7769 6.9999Z" fill={fill} />
  </svg>
);

export default React.memo(ChevronLeft);
