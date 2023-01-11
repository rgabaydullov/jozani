import React from 'react';
import { StyledMenu } from './shared/ui';
import { IMenuProps } from './types';

const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <StyledMenu {...props} />
  );
};

export default React.memo(Menu);

export * from './shared/ui';
export * from './types';
