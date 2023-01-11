import { ReactNode } from 'react';
import { IVirtualizedListProps } from '../virtualized-list';

export interface ISectionItem {
  title?: string;
  data?: unknown[];
}

export interface ISectionListProps extends Omit<IVirtualizedListProps,
  'data' |
  'renderItem'
> {
  sections: ISectionItem[];
  renderSectionHeader(
    section: ISectionItem,
    index: number,
    data: ISectionItem[],
  ): ReactNode;
  renderItem(
    item: ISectionItem,
    index: number,
    data: ISectionItem[],
  ): ReactNode;
};
