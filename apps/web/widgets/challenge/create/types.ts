import { ReactNode } from 'react';

export interface IChallengeCreateProps {
  activeStep: number;
  children?: ReactNode;
  next(values: unknown): void;
}
