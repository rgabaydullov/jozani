import { getCssVar } from '@jozani/uikit';
import { IChallengeCreateCheckPointProps } from './types';

export const getCheckPointColor = (
  type: Pick<IChallengeCreateCheckPointProps, 'type'>,
) => {
  switch (type) {
    case 'success':
      return getCssVar('green', 700);
    case 'error':
      return getCssVar('red', 500);
    case 'progress':
      return getCssVar('purple', 400);
    default:
      return getCssVar('grey', 200);
  }
};
