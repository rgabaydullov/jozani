import React from 'react';
import { ScrollViewWrapper } from './shared/ui';
import { IScrollViewProps } from './types';

const ScrollView: React.FC<IScrollViewProps> = ({
  children,
  className,
}) => {
  return (
    <ScrollViewWrapper className={className}>
      {children}
    </ScrollViewWrapper>
  );
};

export default React.memo(ScrollView);
