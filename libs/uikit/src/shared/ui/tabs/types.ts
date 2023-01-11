import { TabsProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ITabItemProps {
  value?: unknown;
  icon?: ReactNode;
  label: ReactNode;
}

export interface ITabsProps extends Omit<TabsProps,
  'children' |
  'defaultValue'
> {
  isMinified?: boolean;
  defaultValue?: unknown;
  data: ITabItemProps[];
  renderTab?(
    item: ITabItemProps,
    value: unknown,
    isActive: boolean,
  ): ReactNode;
};
