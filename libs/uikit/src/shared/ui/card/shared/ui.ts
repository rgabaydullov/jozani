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
  padding: 1.6rem 2.4rem 0;
  font-weight: ${getCssVar('font', 'bold')};

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 1.6rem 1.6rem 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: inherit;
  padding: 1.6rem 2.4rem;
  height: inherit;

  @media screen and (max-width: ${BREAKPOINTS.sm}px) {
    padding: 1.6rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  padding: 1.6rem;
`;
