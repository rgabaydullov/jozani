import React from 'react';
import { StyledSectionPromo } from './shared';
import { ISectionPromoProps } from './types';

const SectionPromo: React.FC<ISectionPromoProps> = ({
  children,
}) => {
  return (
    <StyledSectionPromo>
      {children}
    </StyledSectionPromo>
  );
};

export default React.memo(SectionPromo);
