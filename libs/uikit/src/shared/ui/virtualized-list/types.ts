import { CSSProperties, ReactNode } from 'react';

export interface ICachedItem {
  item: unknown;
  key: string;
}

export interface IVirtualizedListProps {
  isReady?: boolean;
  isRefreshable?: boolean;
  data?: unknown[];
  emptyContent?: ReactNode;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  style?: CSSProperties;
  keyExtractor?(item: unknown, index: number): string;
  renderItem(
    item: unknown,
    index: number,
    data: unknown[],
  ): ReactNode;
  onRefresh?(): Promise<unknown[]>;
  onError?(error: Error): void;
}
