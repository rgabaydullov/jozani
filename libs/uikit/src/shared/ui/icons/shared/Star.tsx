import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Star: React.FC<IIconProps> = ({
  width = 24,
  height = 24,
  fill = getCssVar('grey', 100),
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
      d="M10.716 3.81808C11.1201 2.57431 12.8797 2.57431 13.2838 3.81808L14.4345 7.35954C14.6153 7.91577 15.1336 8.29236 15.7184 8.29236H19.4422C20.7499 8.29236 21.2937 9.96585 20.2357 10.7345L17.2231 12.9233C16.75 13.267 16.552 13.8764 16.7327 14.4326L17.8834 17.9741C18.2875 19.2178 16.864 20.2521 15.806 19.4834L12.7934 17.2947C12.3203 16.9509 11.6796 16.9509 11.2064 17.2947L8.19386 19.4834C7.13585 20.2521 5.7123 19.2178 6.11642 17.9741L7.26711 14.4326C7.44784 13.8764 7.24985 13.267 6.77669 12.9233L3.76416 10.7345C2.70614 9.96585 3.24989 8.29236 4.55766 8.29236H8.28137C8.86622 8.29236 9.38456 7.91577 9.56529 7.35954L10.716 3.81808Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(Star);
