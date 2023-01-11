import styled from 'styled-components';
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
} from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';

export const StyledBottomNavigation = styled(MuiBottomNavigation)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8.2rem;
  background: ${getCssVar('grey', 950)};
  border: 0 transparent solid;
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.45);
  z-index: 10;
`;

export const StyledBottomNavigationAction = styled(MuiBottomNavigationAction)`
  &[class*=selected] {
    color: ${getCssVar('grey', 200)};
  }

  span:first-of-type {
    margin-top: .4rem;
    font-size: 1rem;
  }
`;
