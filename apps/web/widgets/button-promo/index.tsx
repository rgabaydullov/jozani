import React from 'react';
import { StyledButtonPromo } from './shared';
import { IButtonPromoProps } from './types';

const ButtonPromo: React.FC<IButtonPromoProps> = ({
  type,
  ...props
}) => {
  return (
    <StyledButtonPromo {...props} />
  );
};

export default React.memo(ButtonPromo);
