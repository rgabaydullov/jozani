import React from 'react';
import { SafeViewWrapper } from './shared/ui';
import { ISafeViewProps } from './types';

const SafeView: React.FC<ISafeViewProps> = ({
  children,
  className,
}) => {
  return (
    <SafeViewWrapper className={className}>
      {children}
    </SafeViewWrapper>
  );
};

export default React.memo(SafeView);
