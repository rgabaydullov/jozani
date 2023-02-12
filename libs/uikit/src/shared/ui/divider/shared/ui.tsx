import { Divider as MuiDivider } from '@mui/material';
import { getCssVar } from '../../../../lib';
import styled from 'styled-components';

export const StyledDivider = styled(MuiDivider)`
  background: ${getCssVar('grey', 100)};
`;
