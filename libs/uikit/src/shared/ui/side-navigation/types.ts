import { ReactNode } from 'react';
import { ISideNavigationWrapperProps } from './shared/types';

export interface ISideNavigationProps extends ISideNavigationWrapperProps {
  children?: ReactNode;
}
