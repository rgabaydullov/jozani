import React from 'react';
import { getCssVar } from '../../../../lib';
import { IImageProps } from '../types';

const EmptyList: React.FC<IImageProps> = ({
  fill = getCssVar('grey', 100),
  width = 72,
  height = 72,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill={fill}
      width={width}
      height={height}
      {...props}
    >
      <rect y="52" width="72" height="20" rx="4" fill="#3A3C41" />
      <rect opacity="0.9" x="23" y="58" width="24" height="2" fill="#898E96" />
      <rect opacity="0.9" x="23" y="63" width="13" height="2" fill="#4E5158" />
      <path d="M14 61.1339C14.6667 61.5188 14.6667 62.4811 14 62.866L9.5 65.4641C8.83333 65.849 8 65.3678 8 64.598L8 59.4019C8 58.6321 8.83333 58.151 9.5 58.5359L14 61.1339Z" fill="#898E96" />
      <rect y="26" width="72" height="20" rx="4" fill="#3A3C41" />
      <rect opacity="0.9" x="23" y="32" width="24" height="2" fill="#898E96" />
      <rect opacity="0.9" x="23" y="37" width="13" height="2" fill="#4E5158" />
      <path d="M14 35.1339C14.6667 35.5188 14.6667 36.4811 14 36.866L9.5 39.4641C8.83333 39.849 8 39.3678 8 38.598L8 33.4019C8 32.6321 8.83333 32.151 9.5 32.5359L14 35.1339Z" fill="#898E96" />
      <rect width="72" height="20" rx="4" fill="#3A3C41" />
      <rect opacity="0.9" x="23" y="7" width="24" height="2" fill="#898E96" />
      <rect opacity="0.9" x="23" y="12" width="13" height="2" fill="#4E5158" />
      <path d="M14 9.13393C14.6667 9.51883 14.6667 10.4811 14 10.866L9.5 13.4641C8.83333 13.849 8 13.3678 8 12.598L8 7.40188C8 6.63208 8.83333 6.15096 9.5 6.53586L14 9.13393Z" fill="#898E96" />
    </svg>
  );
};

export default React.memo(EmptyList);
