import styled from 'styled-components';
import { BREAKPOINTS } from '../../../lib';

export const LayoutWrapper = styled.div`
  display: flex;
  padding: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin: 0;
    height: calc(100vh - 7.2rem);
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) and (orientation: landscape) {
    margin: 7.2rem 0 0;
    height: auto;
  }
`;

export const ScreenLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 7.4rem 0 0;
  padding: .8rem 2.4rem;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    margin: 7.4rem 0 0;
    padding: 0 3.6rem;
  }
`;

export const ScreenLayoutContent = styled.div`
  /* max-width: ${BREAKPOINTS.desktop}px; */
`;
