import { ReactNode } from 'react';
import { IModalProps as IOriginModalProps } from '../../ui';

export interface IUseModalProps extends Omit<IOriginModalProps,
  'children' |
  'open' |
  'onSubmit'
> {
  disableBackdropClose?: boolean;
  id?: string;
  children: ReactNode | ((close: () => void) => ReactNode);
  onSubmit?(result?: unknown): void;
  // renderItem(item: unknown): ReactNode;
  // onButtonClick?(e: SyntheticEvent, open: OpenCallback): void;
}
