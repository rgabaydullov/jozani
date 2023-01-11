import React from 'react';
import { StyledCardPromo } from './shared';
import { ICardPromoProps } from './types';

const CardPromo: React.FC<ICardPromoProps> = ({
  alignItems = 'center',
  justifyContent = 'center',
  style,
  ...props
}) => (
  <StyledCardPromo
    {...props}
    style={{
      ...style,
      alignItems: alignItems as string,
      justifyContent: justifyContent as string,
    }}
  />
);

export default React.memo(CardPromo);
