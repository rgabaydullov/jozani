import React from 'react';
import { IIconProps } from '../types';

const NavVideo: React.FC<IIconProps> = ({ width = 20, height = 20, fill = '#d9d9d9', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.56845 1.2037C7.64442 0.740166 8.04499 0.399902 8.51471 0.399902H11.4851C11.9548 0.399902 12.3554 0.740165 12.4314 1.2037L12.6252 2.38618C12.6803 2.72237 12.9117 2.99977 13.2199 3.14481C13.6072 3.32706 13.9766 3.54116 14.3246 3.78374C14.6043 3.97868 14.9605 4.04054 15.2794 3.92009L16.4019 3.4961C16.8413 3.33013 17.3363 3.5069 17.5711 3.91369L19.0563 6.48611C19.2912 6.8929 19.1968 7.40994 18.8334 7.7075L17.9048 8.4677C17.6415 8.68328 17.5169 9.02192 17.5452 9.36103C17.5628 9.57166 17.5718 9.78473 17.5718 9.9999C17.5718 10.2151 17.5628 10.4281 17.5452 10.6388C17.5169 10.9779 17.6415 11.3165 17.9048 11.5321L18.8334 12.2923C19.1968 12.5899 19.2912 13.1069 19.0563 13.5137L17.5712 16.0861C17.3363 16.4929 16.8413 16.6697 16.4019 16.5037L15.2794 16.0797C14.9605 15.9593 14.6043 16.0211 14.3246 16.2161C13.9766 16.4586 13.6073 16.6727 13.2199 16.855C12.9117 17 12.6803 17.2774 12.6252 17.6136L12.4314 18.7961C12.3554 19.2596 11.9548 19.5999 11.4851 19.5999H8.51471C8.04499 19.5999 7.64442 19.2596 7.56845 18.7961L7.37465 17.6136C7.31955 17.2774 7.08811 17 6.77986 16.855C6.39256 16.6727 6.02321 16.4586 5.67518 16.2161C5.39552 16.0211 5.03931 15.9593 4.7204 16.0797L3.59789 16.5037C3.15848 16.6697 2.66351 16.4929 2.42865 16.0861L0.943462 13.5137C0.708602 13.1069 0.802994 12.5899 1.16644 12.2923L2.09499 11.5321C2.35829 11.3165 2.4829 10.9779 2.45457 10.6388C2.43698 10.4281 2.428 10.2151 2.428 9.9999C2.428 9.78473 2.43698 9.57166 2.45457 9.36104C2.4829 9.02193 2.35829 8.68328 2.09499 8.46771L1.16644 7.7075C0.802997 7.40994 0.708605 6.8929 0.943465 6.48612L2.42866 3.91369C2.66352 3.5069 3.15848 3.33013 3.5979 3.4961L4.7204 3.92009C5.03931 4.04055 5.39552 3.97868 5.67519 3.78374C6.02321 3.54116 6.39256 3.32706 6.77986 3.14482C7.08811 2.99977 7.31955 2.72237 7.37465 2.38619L7.56845 1.2037ZM9.99991 14.2611C12.3533 14.2611 14.2612 12.3533 14.2612 9.9999C14.2612 7.64648 12.3533 5.73866 9.99991 5.73866C7.64649 5.73866 5.73867 7.64648 5.73867 9.9999C5.73867 12.3533 7.64649 14.2611 9.99991 14.2611Z"
      fill={fill}
    />
  </svg>
);

export default React.memo(NavVideo);
