import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { BREAKPOINTS, Divider } from '@jozani/uikit';
import {
  HeaderContainer,
  HeaderWrapper,
} from './shared/ui';
import { IHeaderProps } from './types';

const Header: React.FC<IHeaderProps> = ({ children }) => {

  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.md}px)`);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      setIsActive(document.documentElement.scrollTop >= 15);
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <HeaderWrapper
      isActive={isActive}
      id="header"
    >
      <HeaderContainer>
        {children}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);

export * from './shared/ui';
export * from './types';
