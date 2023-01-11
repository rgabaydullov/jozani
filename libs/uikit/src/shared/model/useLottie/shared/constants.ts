import { AnimationConfigWithData } from 'lottie-web';

export const DEFAULT_CONFIG: Omit<AnimationConfigWithData<'svg'>,
  'container' |
  'animationData'
> = {
  renderer: 'svg',
  loop: true,
  autoplay: true,
};
