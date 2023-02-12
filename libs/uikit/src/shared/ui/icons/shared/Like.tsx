import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Like: React.FC<IIconProps> = ({
  width = 8,
  height = 8,
  fill = getCssVar('grey', 100),
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.95346 2.03305C2.61021 2.44231 2.42208 2.95939 2.42208 3.49353V6.96606C2.42208 7.07902 2.51365 7.1706 2.62662 7.1706H5.56405C6.29602 7.1706 6.95661 6.73167 7.24021 6.05687L7.74933 4.8455C7.90164 4.48307 7.9801 4.09389 7.9801 3.70076V3.34844C7.9801 2.97188 7.67484 2.66662 7.29828 2.66662H4.94101C4.80114 2.66662 4.70253 2.52938 4.74716 2.39682L5.2465 0.913452C5.31976 0.695822 5.2466 0.455691 5.06443 0.315888C4.83624 0.140765 4.5106 0.176454 4.32576 0.396844L2.95346 2.03305Z" fill={fill} />
    <path d="M0.492631 3.10259C0.379664 3.10259 0.288086 3.19416 0.288086 3.30713V6.96605C0.288086 7.07902 0.379664 7.1706 0.492631 7.1706H1.30844C1.42141 7.1706 1.51299 7.07902 1.51299 6.96605V3.30713C1.51299 3.19416 1.42141 3.10259 1.30844 3.10259H0.492631Z" fill={fill} />
  </svg>
);

export default React.memo(Like);