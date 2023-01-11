import styled from 'styled-components';
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from '@mui/material';
import { IListItemProps } from '../types';
import { getCssVar } from 'libs/uikit/src/lib';

export const ListWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export const StyledList = styled(MuiList)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled(MuiListItem)`
  color: ${({ isActive }: IListItemProps) => (isActive
    ? getCssVar('grey', 950)
    : getCssVar('grey', 500))};
`;

export const StyledListItemButton = styled(MuiListItemButton)`
  padding: .8rem;
  border-radius: .4rem;
  color: currentColor;
`;

export const StyledListItemText = styled(MuiListItemText)`
  white-space: nowrap;
  color: currentColor;

  span {
    font-weight: inherit;
    color: currentColor;
  }
`;

export const StyledListItemIcon = styled(MuiListItemIcon)`
  display: inline-flex;
  justify-content: center;
  min-width: 3.2rem;
  color: currentColor;
`;
