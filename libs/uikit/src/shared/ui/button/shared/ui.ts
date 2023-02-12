import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import { getCssVar } from '../../../../lib';

export const StyledButton = styled(MuiButton)`
  min-width: auto;
  max-width: none;
  min-height: 3.2rem;
  border-radius: .8rem;

  &:disabled, &[class*=disabled] {
    background: ${getCssVar('grey', 200)};
    color: ${getCssVar('black', 40)};
    cursor: default;

    &:hover {
      background: ${getCssVar('grey', 200)};
      color: ${getCssVar('black', 40)};
    }

    &:active {
      background: ${getCssVar('grey', 200)};
      color: ${getCssVar('black', 40)};
    }
  }
`;
