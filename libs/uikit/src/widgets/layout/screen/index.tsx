import React from 'react';
import { ScreenLayoutContent, ScreenLayoutWrapper } from '../shared/ui';
import { ILayoutProps } from '../types';

const ScreenLayout: React.FC<ILayoutProps> = ({ children, style }) => {
  return (
    <ScreenLayoutWrapper style={style}>
      <ScreenLayoutContent>
        {children}
      </ScreenLayoutContent>
    </ScreenLayoutWrapper>
  );
};

export default React.memo(ScreenLayout);
