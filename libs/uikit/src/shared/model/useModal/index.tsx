import { isFunction } from 'lodash';
import {
  SyntheticEvent,
  useCallback, useMemo, useState,
} from 'react';
import { Modal } from '../../ui';
import { IUseModalProps } from './types';

const useModal = ({
  id,
  disableBackdropClose = false,
  children,
  onClose: _onClose,
  onSubmit: _onSubmit,
  ...props
}: IUseModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sharedItem, setSharedItem] = useState<null | unknown>(null);

  const open = useCallback((sharedItem?: unknown) => {
    setIsOpen(true);

    if (sharedItem) {
      setSharedItem(sharedItem);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onClose = useCallback((_?: SyntheticEvent, reason?: string) => {
    if (reason === 'backdropClick' && disableBackdropClose) {
      return false;
    }

    close();

    if (_onClose) {
      _onClose();
    }
  }, [disableBackdropClose, close, _onClose]);

  const onSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();

    if (_onSubmit) {
      _onSubmit(sharedItem);
    }

    onClose(e);
  }, [sharedItem, onClose, _onSubmit]);

  const modal = useMemo(() => (
    <Modal
      open={isOpen}
      {...props}
      children={(isFunction(children) && children(close) || children) as never}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  ), [isOpen, children, props, close, onClose, onSubmit]);

  return {
    isOpen,
    modal,
    open,
    close,
    onSubmit,
  };
};

export default useModal;
