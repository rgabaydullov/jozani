import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Send: React.FC<IIconProps> = ({
  isDisabled = false,
  width = 21,
  height = 18,
  fill = '#d9d9d9',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.85167 17.5211L20.3666 9.69073C20.9771 9.43254 20.9771 8.56738 20.3666 8.3092L1.85167 0.478872C1.30833 0.249084 0.724648 0.707588 0.819234 1.28989L1.41156 4.93643C1.62328 6.23983 2.66236 7.25154 3.97095 7.4284L11.6963 8.47248C11.9604 8.50816 12.1574 8.73356 12.1574 9C12.1574 9.26644 11.9604 9.49183 11.6963 9.52752L3.97094 10.5716C2.66235 10.7485 1.62326 11.7602 1.41155 13.0636L0.819233 16.71C0.724647 17.2923 1.30833 17.7508 1.85167 17.5211Z"
      fill={isDisabled ? getCssVar('grey', 900) : fill}
    />
  </svg>
);

export default React.memo(Send);
