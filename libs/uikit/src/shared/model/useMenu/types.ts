import { ReactNode, SyntheticEvent } from 'react';
import { IMenuProps as IOriginMenuProps } from '../../ui';

export type OpenCallback = (e: SyntheticEvent, item?: unknown) => void;

export interface IUseMenuProps extends Pick<IOriginMenuProps,
  'transformOrigin'
> {
  id: string;
  list: unknown[];
  renderItem(item: unknown, sharedData: unknown): ReactNode;
  onButtonClick?(e: SyntheticEvent, open: OpenCallback): void;
  onItemClick?(e: SyntheticEvent, item: unknown, sharedData: unknown): void;
}
