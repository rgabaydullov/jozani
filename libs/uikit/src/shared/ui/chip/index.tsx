import React from 'react';
import { ChipComponent } from './shared/ui';
import { IChipProps } from './types';

const Chip: React.FC<IChipProps> = ({ children, ...props}) => (
  <ChipComponent {...props}>
    {children as never}
  </ChipComponent>
);

export default React.memo(Chip);
