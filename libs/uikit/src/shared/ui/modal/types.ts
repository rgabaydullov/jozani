import { ReactNode } from 'react';
import { ModalProps, ButtonProps } from '@mui/material';

export interface IModalProps extends Omit<ModalProps, 'title' | 'onClose'> {
  title?: ReactNode;
  actionButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onClose?(): void;
}
