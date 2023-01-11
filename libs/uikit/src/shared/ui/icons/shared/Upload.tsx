import React from 'react';
import { getCssVar } from '../../../../lib';
import { IIconProps } from '../types';

const Upload: React.FC<IIconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.32 5.38489C12.1433 5.2106 11.8567 5.2106 11.68 5.38489L6.52527 10.4691C6.34856 10.6434 6.06205 10.6434 5.88534 10.4691L5.38253 9.97315C5.20582 9.79886 5.20582 9.51628 5.38253 9.34198L11.68 3.13072C11.8567 2.95643 12.1433 2.95643 12.32 3.13072L18.6175 9.34198C18.7942 9.51628 18.7942 9.79886 18.6175 9.97315L18.1147 10.4691C17.938 10.6434 17.6514 10.6434 17.4747 10.4691L12.32 5.38489Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6445 3.94224C11.3946 3.94224 11.192 4.14205 11.192 4.38854L11.192 16.0537C11.192 16.3002 11.3946 16.5 11.6445 16.5H12.3556C12.6055 16.5 12.8081 16.3002 12.8081 16.0537L12.808 4.38854C12.808 4.14205 12.6054 3.94223 12.3555 3.94223L11.6445 3.94224Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 20.58C6 20.812 6.19057 21 6.42565 21L17.5744 21C17.8094 21 18 20.8119 18 20.58L18 19.92C18 19.688 17.8094 19.5 17.5744 19.5L6.42564 19.5C6.19057 19.5 6 19.6881 6 19.92L6 20.58Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(Upload);
