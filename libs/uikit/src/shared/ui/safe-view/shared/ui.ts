import styled from 'styled-components';
import { BREAKPOINTS } from '../../../../lib';

export const SafeViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
  max-width: 1200px;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin: 0 2.4rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    margin: 0 auto;
  }
`;
