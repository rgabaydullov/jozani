import { Card as MuiCard } from '@mui/material';
import styled from 'styled-components';
import { BREAKPOINTS, getCssVar } from '../../../../lib';
import { ICardProps } from '../types';

export const StyledCard = styled(MuiCard)`
  width: ${({ isFullWidth = false }: ICardProps) => (isFullWidth
    ? '100%'
    : 'auto')};
  height: ${({ isFullHeight = false }: ICardProps) => (isFullHeight
    ? '100%'
    : 'auto')};
  background: ${getCssVar('white', 100)};
  border: 0 solid ${getCssVar('grey', 200)};
  border-radius: 1.6rem;
  box-shadow: 2px 8px 16px ${getCssVar('grey', 200)};
`;

export const CardTitleWrapper = styled.div`
  padding: 2.4rem;
  font-size: ${getCssVar('font', 'h5')};
  font-weight: ${getCssVar('font', 'bold')};

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 1rem .8rem;
    .ml-auto > button {
      padding: 0 .5rem;
      width: 120px;
    }
  }
`;

export const CardContainer = styled.div`
  padding: 3.2rem 4rem;

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: .6rem;
  }
`;
