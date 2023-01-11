import React from 'react';
import { HeroClipPath, HeroContent, HeroView, StyledHeroWrapper } from './shared/ui';
import { IHeroPromoProps } from './types';

const HeroPromo: React.FC<IHeroPromoProps> = ({
  backgroundComponent,
  children,
  style,
}) => {
  return (
    <StyledHeroWrapper
      style={style}
    >
      <HeroView>
        {backgroundComponent}
        <HeroClipPath />
      </HeroView>

      <HeroContent>
        {children}
      </HeroContent>
    </StyledHeroWrapper>
  );
};

export default React.memo(HeroPromo);
