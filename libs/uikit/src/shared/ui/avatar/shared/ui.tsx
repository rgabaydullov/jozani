import styled from 'styled-components';
import {
  Avatar as MuiAvatar,
} from '@mui/material';
import { getCssVar, getSizeUnit } from '../../../../lib';
import { IAvatarProps } from '../types';

export const AvatarWrapper = styled.div<Pick<IAvatarProps, 'size'>>`
  display: flex;
  flex: ${({ size = 40 }) => `0 0 ${getSizeUnit(size)}`};
  align-items: center;
  justify-content: center;
  width: ${({ size = 40 }) => getSizeUnit(size)};
  height: ${({ size = 40 }) => getSizeUnit(size)};
  background: ${getCssVar('grey', 950)};
  border: 0 solid transparent;
  border-radius: 50%;
  text-transform: uppercase;
  overflow: hidden;
`;

export const StyledAvatar = styled(MuiAvatar)`
  display: flex;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: ${getCssVar('font', 'common')};
  font-weight: ${getCssVar('font', 'bold')};
`;
