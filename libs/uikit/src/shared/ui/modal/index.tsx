import React, { FormEvent, useMemo } from 'react';
import { getCssVar } from '../../../lib';
import Button from '../button';
import { IconCross } from '../icons';
import {
  ButtonsWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalTitle,
  StyledModal,
} from './shared/ui';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({
  title,
  children,
  actionButtonProps,
  cancelButtonProps,
  onClose,
  ...props
}) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (actionButtonProps?.onClick) {
      actionButtonProps.onClick(event as never);
    }
  };

  const footerContent = useMemo(() => {
    if (!actionButtonProps && !cancelButtonProps) return null;
    return (
      <ModalFooter>
        <ButtonsWrapper>
          {actionButtonProps && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              {...actionButtonProps}
            >
              {actionButtonProps.children}
            </Button>
          )}

          {cancelButtonProps && (
            <Button
              variant="contained"
              color="secondary"
              onClick={onClose}
              {...cancelButtonProps}
            >
              {cancelButtonProps.children}
            </Button>
          )}
        </ButtonsWrapper>
      </ModalFooter>
    );
  }, [actionButtonProps, cancelButtonProps, onClose]);

  return (
    <StyledModal {...props} onClose={onClose}>
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>
          <IconCross
            width={16}
            height={16}
            fill={getCssVar('white', 40)}
          />
        </ModalCloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}

        <ModalContent
          style={{
            marginTop: title ? 0 : '1.6rem',
          }}
          onSubmit={onSubmit}
        >
          {children}
          {footerContent}
        </ModalContent>
      </ModalContainer>
    </StyledModal>
  );
};

export default React.memo(Modal);

export * from './shared/ui';
export * from './types';
