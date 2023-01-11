import React from 'react';
import { getCssVar } from '../../../../lib';
import { IImageProps } from '../types';

const Logo: React.FC<IImageProps> = ({
  fill = getCssVar('grey', 100),
  width = 61,
  height = 15,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 15" fill={fill} width={width} height={height} {...props}>
      <path d="M60.6013 0.0580645H58.1413C58.0377 0.0580645 57.9383 0.0992364 57.865 0.172523C57.7917 0.24581 57.7505 0.345209 57.7505 0.448852V9.38617H57.6723L57.2816 8.84297L49.8976 0.19484C49.862 0.15173 49.8172 0.117093 49.7665 0.0934367C49.7158 0.0697801 49.6605 0.0576968 49.6045 0.0580645H46.9335C46.8299 0.0580645 46.7305 0.0992364 46.6572 0.172523C46.5839 0.24581 46.5427 0.345209 46.5427 0.448852V14.1147C46.5427 14.2183 46.5839 14.3177 46.6572 14.391C46.7305 14.4643 46.8299 14.5055 46.9335 14.5055H49.3955C49.4991 14.5055 49.5985 14.4643 49.6718 14.391C49.7451 14.3177 49.7863 14.2183 49.7863 14.1147V5.17738H49.8644L50.2552 5.71862L57.645 14.3668C57.6817 14.409 57.727 14.443 57.7779 14.4662C57.8288 14.4895 57.8841 14.5015 57.94 14.5016H60.6091C60.7128 14.5016 60.8122 14.4604 60.8854 14.3871C60.9587 14.3138 60.9999 14.2144 60.9999 14.1108V0.446899C60.9997 0.395081 60.9891 0.343829 60.9689 0.296126C60.9486 0.248424 60.9191 0.205222 60.882 0.169038C60.8449 0.132854 60.801 0.104409 60.7528 0.0853569C60.7046 0.0663052 60.6531 0.0570275 60.6013 0.0580645Z" />
      <path d="M7.31555 0.0579863H0.390788C0.287144 0.0579863 0.187746 0.0991581 0.114459 0.172445C0.0411719 0.245732 0 0.345131 0 0.448774V14.1146C0 14.2183 0.0411719 14.3177 0.114459 14.3909C0.187746 14.4642 0.287144 14.5054 0.390788 14.5054H7.45623C9.34649 14.5033 11.1607 13.7609 12.5102 12.4373C13.8597 11.1137 14.6372 9.31419 14.676 7.42433C14.7522 3.37187 11.3622 0.0579863 7.31555 0.0579863ZM7.16704 11.4768H3.60306C3.49942 11.4768 3.40002 11.4356 3.32673 11.3623C3.25345 11.2891 3.21227 11.1897 3.21227 11.086V3.47738C3.21227 3.37374 3.25345 3.27434 3.32673 3.20105C3.40002 3.12776 3.49942 3.08659 3.60306 3.08659H7.45818C9.75602 3.08659 11.4169 4.93697 11.4423 7.22894C11.4657 9.5639 9.502 11.4768 7.16509 11.4768H7.16704Z" />
      <path d="M44.8475 7.28661C44.8475 3.26382 41.657 0.0038625 37.7192 0H36.1221C32.1804 0 28.9861 3.26189 28.9861 7.28661C28.9861 11.3113 32.1862 14.5752 36.1221 14.5752H37.7385C41.6686 14.5578 44.8475 11.3017 44.8475 7.28661ZM37.7018 11.5354H36.1143C33.8239 11.5354 32.1765 9.63888 32.1765 7.30013C32.1765 4.96139 33.8239 3.0649 36.1143 3.0649H37.7018C39.9942 3.0649 41.6416 4.96139 41.6416 7.30013C41.6416 9.63888 40.0019 11.5373 37.7095 11.5373L37.7018 11.5354Z" />
      <path d="M18.6827 3.08678H15.6179C15.5153 3.08678 15.4169 3.04561 15.3443 2.97232C15.2717 2.89904 15.231 2.79964 15.231 2.69599V0.454827C15.231 0.351184 15.2717 0.251785 15.3443 0.178498C15.4169 0.105211 15.5153 0.0640393 15.6179 0.0640393H21.2637C21.3202 0.0633037 21.3762 0.0750627 21.4277 0.0984872C21.4791 0.121912 21.5249 0.156434 21.5618 0.199634C21.5987 0.242833 21.6258 0.293662 21.6411 0.348549C21.6565 0.403437 21.6597 0.461054 21.6507 0.517354C21.5423 1.23346 21.1832 1.88656 20.6386 2.35804C20.094 2.82951 19.4 3.08808 18.6827 3.08678Z" />
      <path d="M20.063 11.0978V7.29548C20.063 5.37808 20.8247 3.53921 22.1805 2.1834C23.5363 0.827593 25.3752 0.0659075 27.2926 0.0659075H27.7049C27.8085 0.0659075 27.9079 0.107082 27.9812 0.180369C28.0545 0.253656 28.0957 0.353052 28.0957 0.456695V2.69591C28.0957 2.79955 28.0545 2.89895 27.9812 2.97224C27.9079 3.04553 27.8085 3.0867 27.7049 3.0867H23.6856C23.582 3.0867 23.4826 3.12787 23.4093 3.20116C23.336 3.27444 23.2949 3.37384 23.2949 3.47748V7.27008C23.2949 9.18748 22.5332 11.0264 21.1774 12.3822C19.8216 13.738 17.9827 14.4997 16.0653 14.4997H15.6315C15.5279 14.4997 15.4285 14.4585 15.3552 14.3852C15.2819 14.3119 15.2407 14.2125 15.2407 14.1089V11.8638C15.2407 11.7601 15.2819 11.6607 15.3552 11.5875C15.4285 11.5142 15.5279 11.473 15.6315 11.473H19.6781C19.7781 11.4716 19.8737 11.4319 19.9453 11.3621C20.0169 11.2923 20.0591 11.1977 20.063 11.0978Z" />
      <path d="M24.6402 11.4749H27.6896C27.7927 11.4749 27.8917 11.5161 27.9646 11.5893C28.0375 11.6626 28.0785 11.762 28.0785 11.8657V14.1147C28.0785 14.2183 28.0375 14.3177 27.9646 14.391C27.8917 14.4643 27.7927 14.5054 27.6896 14.5054H22.0497C21.993 14.5062 21.9367 14.4944 21.885 14.471C21.8332 14.4476 21.7872 14.4131 21.7501 14.3699C21.7131 14.3267 21.6858 14.2758 21.6704 14.2209C21.655 14.1661 21.6517 14.1084 21.6608 14.0521C21.7683 13.3354 22.128 12.6812 22.6747 12.2083C23.2214 11.7355 23.9188 11.4752 24.6402 11.4749Z" />
    </svg>
  );
};

export default React.memo(Logo);
