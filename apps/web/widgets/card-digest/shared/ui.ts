import { Card, getCssVar, Typography } from '@jozani/uikit';
import { capitalize, get } from 'lodash';
import styled from 'styled-components';
import { ICardDigestProps } from '../types';
import { DEFAULT_COLORS } from './constants';

export const CardDigestWrapper = styled.section`
  display: flex;
  position: relative;
  width: 140px;
`;

export const CardDigestBlock = styled.div`
  padding-top: 100%;
`;

export const CardDigestContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CardDigestTitle = styled(Typography)``;

export const StyledCardDigest = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: ${({ type, bgColors }: Pick<ICardDigestProps, 'type' | 'bgColors'>) => {
    const [from, to] = get(bgColors, capitalize(type), DEFAULT_COLORS);

    return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;
  }};
  font-size: ${getCssVar('font', 'common')};
  opacity: .9;
  transition: all .27s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
