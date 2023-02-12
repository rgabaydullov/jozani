import { getCssVar, Link, SafeView } from '@jozani/uikit';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 1.6rem;
`;

export const FooterSafeView = styled(SafeView)`
  padding: 1.6rem 0;
  color: ${getCssVar('grey', 500)};
  border-top: 1px solid ${getCssVar('grey', 100)};
`;

export const FooterLinks = styled.div`
  margin-top: 1.6rem;
`;

export const FooterLink = styled.a`
  margin-right: .8rem;
  font-size: ${getCssVar('font', 'small')};
  color: ${getCssVar('grey', 500)};

  &:hover {
    color: ${getCssVar('grey', 600)};
  }

  &:active {
    color: ${getCssVar('grey', 700)};
  }

  &:after {
    content: '|';
    margin-left: .8rem;
    color: ${getCssVar('grey', 100)};
  }

  &:last-child {
    margin-right: 0;

    &:after {
      display: none;
    }
  }
`;
