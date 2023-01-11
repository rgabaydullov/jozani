import { Button, getCssVar } from '@jozani/uikit';
import styled from 'styled-components';

export const StyledButtonPromo = styled(Button)`
  background: ${getCssVar('green', 500)};
  color: ${getCssVar('black', 90)};

  &:hover {
    background: ${getCssVar('green', 600)};
  }

  &:active {
    background: ${getCssVar('green', 700)};
  }
`;
