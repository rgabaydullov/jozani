import { ReactNode } from 'react';

export interface IAppProps {
  isCommonPage?: boolean;
  withMenu?: boolean;
  children: ReactNode;
  renderHeader?(): ReactNode;
}
