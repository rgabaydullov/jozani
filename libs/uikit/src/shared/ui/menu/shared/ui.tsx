import styled from 'styled-components';
import { Menu as MuiMenu, MenuItem as MuiMenuItem } from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';

export const StyledMenu = styled(MuiMenu)``;

export const StyledMenuItem = styled(MuiMenuItem)`
  background: transparent;

  &:active, &[class*=selected] {
    background: ${getCssVar('grey', 900)};

    &:hover {
      background: ${getCssVar('grey', 900)};
    }
  }

  &:hover {
    background: ${getCssVar('grey', 900)};
  }
`;
