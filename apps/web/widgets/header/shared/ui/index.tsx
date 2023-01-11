import styled from 'styled-components';
import { IHeaderWrapperProps } from '../../types';

export const HeaderWrapper = styled.header<IHeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2.4rem;
  width: 100%;
  background: ${({ isActive = false }) => (isActive
    ? 'rgba(185, 235, 253, .15)'
    : 'transparent')};
  border: 1px solid transparent;
  z-index: 10;
  backdrop-filter: ${({ isActive = false }) => (isActive
    ? 'blur(14px)'
    : 'none')};
  transition: all .27s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1.6rem 0;
  height: 4rem;
`;

export const HeaderFit = styled.div`
  margin-left: auto;
`;

export { default as HeaderLogo } from './Logo';
