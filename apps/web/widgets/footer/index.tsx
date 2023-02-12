import React from 'react';
import {
  FooterLink,
  FooterLinks,
  FooterSafeView,
  StyledFooter,
} from './shared';
import { IFooterProps } from './types';

const Footer: React.FC<IFooterProps> = ({
  children,
}) => {
  return (
    <StyledFooter>
      <FooterSafeView>
        {children}

        <FooterLinks>
          <FooterLink href="#">
            Privacy Policy
          </FooterLink>

          <FooterLink href="#">
            Terms of Service
          </FooterLink>
        </FooterLinks>
      </FooterSafeView>
    </StyledFooter>
  );
};

export default React.memo(Footer);

export * from './types';
