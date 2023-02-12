import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Tick: React.FC<IIconProps> = ({
  width = 15,
  height = 10,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.8393 2.25584C14.1647 1.9304 14.1647 1.40277 13.8393 1.07733C13.5138 0.751893 12.9862 0.751893 12.6607 1.07733L5.75 7.98807L2.17259 4.41066C1.84715 4.08523 1.31951 4.08523 0.994078 4.41066C0.668641 4.7361 0.668641 5.26374 0.994078 5.58917L5.16074 9.75584C5.48618 10.0813 6.01382 10.0813 6.33926 9.75584L13.8393 2.25584Z" fill={fill} />
  </svg>
);

export default React.memo(Tick);
