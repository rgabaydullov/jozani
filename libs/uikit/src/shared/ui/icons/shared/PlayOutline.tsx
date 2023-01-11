import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const PlayOutline: React.FC<IIconProps> = ({
  width = 18,
  height = 16,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 0.5C1.67893 0.5 0 2.17893 0 4.25V11.75C0 13.8211 1.67893 15.5 3.75 15.5H14.25C16.3211 15.5 18 13.8211 18 11.75V4.25C18 2.17893 16.3211 0.5 14.25 0.5H3.75ZM11.6433 8.63431C12.1188 8.35239 12.1188 7.64761 11.6433 7.36569L7.81995 5.09922C7.34439 4.81731 6.74994 5.1697 6.74994 5.73353V10.2665C6.74994 10.8303 7.34439 11.1827 7.81995 10.9008L11.6433 8.63431Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(PlayOutline);
