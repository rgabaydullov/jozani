import { ReactNode } from 'react';

export interface IChallengeCreateCard {
  isActive?: boolean;
}

export interface IChallengeCreateCheckPointProps {
  isActive?: boolean;
  type?: 'progress' | 'success' | 'error';
  title: string;
  children: ReactNode;
}
