import React from 'react';
import { ListWrapper, StyledList } from './shared/ui';
import { IListProps } from './types';

const List: React.FC<IListProps> = ({
  children,
  className,
}) => {
  return (
    <ListWrapper className={className}>
      <StyledList>
        {children}
      </StyledList>
    </ListWrapper>
  );
};

export default React.memo(List);

export * from './shared/ui';
export * from './types';
