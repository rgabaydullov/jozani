import React from 'react';
import { getCssVar } from '../../../../lib';
import { IImageProps } from '../types';

const PictureBulk: React.FC<IImageProps> = ({
  fill = getCssVar('grey', 500),
  width = 60,
  height = 54,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.5 18C42.9853 18 45 15.9853 45 13.5C45 11.0147 42.9853 9 40.5 9C38.0147 9 36 11.0147 36 13.5C36 15.9853 38.0147 18 40.5 18Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.02944 0 0 4.02944 0 9V45C0 49.9706 4.02944 54 9 54H51C55.9706 54 60 49.9706 60 45V9C60 4.02944 55.9706 0 51 0H9ZM51 6H9C7.34315 6 6 7.34315 6 9V24.3748L15 16.4993L39 39L48 30L54 35V9C54 7.34314 52.6569 6 51 6Z"
        fill={fill}
      />
    </svg>
  );
};

export default React.memo(PictureBulk);
