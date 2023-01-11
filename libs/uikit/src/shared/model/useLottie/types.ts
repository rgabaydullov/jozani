import { AnimationConfigWithData } from 'lottie-web';

export interface IUseLottie extends Omit<AnimationConfigWithData,
  'container' |
  'animationData'
>  {
  animationData: unknown;
}
