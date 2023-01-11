import React from 'react';
import { StyledTypography } from './shared/ui';
import { ITypographyProps } from './types';

const Typography: React.FC<ITypographyProps> = (props) => {
  return (
    <StyledTypography
      {...props}
    />
  );
};

export default React.memo(Typography);

export * from './types';
