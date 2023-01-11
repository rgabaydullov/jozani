import { CSSProperties, ReactNode } from 'react';

export interface IHeroPromoProps {
  backgroundComponent: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}
