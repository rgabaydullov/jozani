import React from 'react';
import { StyledBottomNavigation } from './shared/ui';
import { IBottomNavigationProps } from './types';

const BottomNavigation: React.FC<IBottomNavigationProps> = ({
  sx,
  ...props
}) => {
  return (
    <StyledBottomNavigation
      {...props}
    />
  );
};

export default React.memo(BottomNavigation);

export * from './shared/ui';
export * from './types';
