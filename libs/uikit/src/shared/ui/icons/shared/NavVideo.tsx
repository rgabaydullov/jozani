import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const NavVideo: React.FC<IIconProps> = ({
  width = 24,
  height = 20,
  fill = getCssVar('grey', 500),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H19C21.7614 20 24 17.7614 24 15V5C24 2.23858 21.7614 0 19 0H5ZM15.5244 10.8457C16.1585 10.4699 16.1585 9.53014 15.5244 9.15426L10.4267 6.13229C9.7926 5.75641 9 6.22626 9 6.97803V13.022C9 13.7737 9.7926 14.2436 10.4267 13.8677L15.5244 10.8457Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(NavVideo);
