import React from 'react';
import { ISideNavigationActionProps } from './types';
import { StyledAction, StyledActionLabel } from './ui';

const Action: React.FC<ISideNavigationActionProps> = ({
  isActive = false,
  disabled = false,
  label,
  icon,
  className,
  onClick,
}) => {
  return (
    <StyledAction
      disabled={disabled}
      isActive={isActive}
      className={className}
      onClick={onClick}
    >
      {icon}

      <StyledActionLabel>
        {label}
      </StyledActionLabel>
    </StyledAction>
  );
};

export default Action;
