import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Play: React.FC<IIconProps> = ({
  width = 11,
  height = 12,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.5 4.7009C10.5 5.27825 10.5 6.72163 9.5 7.29898L2.75 11.1961C1.75 11.7734 0.5 11.0518 0.5 9.89705L0.5 2.10282C0.5 0.948124 1.75 0.226435 2.75 0.803785L9.5 4.7009Z" fill={fill} />
  </svg>
);

export default React.memo(Play);
