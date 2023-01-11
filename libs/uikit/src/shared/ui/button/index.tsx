import React, { ReactNode, useMemo } from 'react';
import { StyledButton } from './shared/ui';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  component: Component,
  to,
  ...props
}) => {
  const Wrapper: React.FC<{ children: ReactNode; }> = useMemo(() => ({ children }) => {
    if (Component) {
      return (
        <Component href={to}>
          {children}
        </Component>
      );
    }

    return (
      <>
        {children}
      </>
    );
  }, [Component, to]);
  return (
    <Wrapper>
      <StyledButton
        disableRipple
        {...props}
      />
    </Wrapper>
  );
};

export default React.memo(Button);

export * from './types';
