import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const BrowserYandex: React.FC<IIconProps> = ({
  width = 25,
  height = 24,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.4887 23.4199C18.7906 23.4199 23.8992 18.3079 23.8992 12.002C23.8992 5.69599 18.7906 0.583984 12.4887 0.583984C6.18681 0.583984 1.07812 5.69599 1.07812 12.002C1.07812 18.3079 6.18681 23.4199 12.4887 23.4199Z" fill="white"/>
    <path d="M6.92569 4.75391L4.80469 6.87491L11.0047 13.0754V20.4464H14.0047V13.0674L20.1972 6.87491L18.0762 4.75391L12.5007 10.3294L6.92569 4.75391Z" fill="#FF0000"/>
  </svg>
);

export default React.memo(BrowserYandex);
