import { Variant } from 'framer-motion';

export type IAnimationVariants<TVariants extends string | number | symbol = AnimationSubheadVariants> = {
  [x in TVariants]: Variant;
}

export enum AnimationSubheadVariants {
  Hidden = 'hidden',
  Visible = 'visible',
}

export const ANIMATION_SUBHEAD_VARIANTS: IAnimationVariants = {
  [AnimationSubheadVariants.Hidden]: {
    opacity: 0,
    paddingTop: 14,
  },
  [AnimationSubheadVariants.Visible]: {
    opacity: 1,
    paddingTop: 0,
  },
};

export const ANIMATION_SUBHEAD_TRANSITION_DURATION = 0.54;

export const ANIMATION_SUBHEAD_IMAGE_VARIANTS: IAnimationVariants = {
  [AnimationSubheadVariants.Hidden]: {
    opacity: 0,
    scale: 0,
  },
  [AnimationSubheadVariants.Visible]: {
    opacity: 1,
    scale: 1,
  },
};
