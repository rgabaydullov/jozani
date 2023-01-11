import { Divider as MuiDivider } from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';
import styled from 'styled-components';

export const StyledDivider = styled(MuiDivider)`
  background: ${getCssVar('white', 30)};
`;
